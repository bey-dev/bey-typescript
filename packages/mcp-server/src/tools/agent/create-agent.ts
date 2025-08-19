// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bey-mcp/filtering';
import { Metadata, asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BeyondPresence from '@bey-dev/sdk';

export const metadata: Metadata = {
  resource: 'agent',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/agent',
  operationId: 'create_agent_v1_agent_post',
};

export const tool: Tool = {
  name: 'create_agent',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an agent.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/developer_agent_response',\n  $defs: {\n    developer_agent_response: {\n      type: 'object',\n      title: 'DeveloperAgentResponseModel',\n      description: 'Response model for the agent.',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id',\n          description: 'Unique identifier of the object in the database.'\n        },\n        avatar_id: {\n          type: 'string',\n          title: 'Avatar Id',\n          description: 'The ID of the avatar to use.'\n        },\n        system_prompt: {\n          type: 'string',\n          title: 'System Prompt',\n          description: 'The system prompt to use.'\n        },\n        capabilities: {\n          type: 'array',\n          title: 'Capabilities',\n          description: 'The extra capabilities to manage the call.',\n          items: {\n            anyOf: [              {\n                type: 'object',\n                title: 'WebcamVision',\n                description: 'Capability for agent to visualize user webcam feed.',\n                properties: {\n                  type: {\n                    type: 'string',\n                    title: 'Type',\n                    enum: [                      'webcam_vision'\n                    ]\n                  }\n                }\n              },\n              {\n                type: 'object',\n                title: 'WakeupMode',\n                description: 'Capability for agent to wake up only on specific keywords.',\n                properties: {\n                  triggers: {\n                    type: 'array',\n                    title: 'Triggers',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  type: {\n                    type: 'string',\n                    title: 'Type',\n                    enum: [                      'wakeup_mode'\n                    ]\n                  }\n                },\n                required: [                  'triggers'\n                ]\n              }\n            ],\n            description: 'Capability for agent to visualize user webcam feed.'\n          }\n        },\n        greeting: {\n          type: 'string',\n          title: 'Greeting',\n          description: 'What to say at the start of the session.'\n        },\n        language: {\n          type: 'string',\n          title: 'Language',\n          description: 'Enum for languages with language codes as values.',\n          enum: [            'ar',\n            'bg',\n            'zh',\n            'cs',\n            'da',\n            'nl',\n            'en',\n            'en-AU',\n            'en-GB',\n            'en-US',\n            'fi',\n            'fr',\n            'fr-CA',\n            'fr-FR',\n            'de',\n            'el',\n            'hi',\n            'hu',\n            'id',\n            'it',\n            'ja',\n            'ko',\n            'ms',\n            'no',\n            'pl',\n            'pt',\n            'pt-BR',\n            'pt-PT',\n            'ro',\n            'ru',\n            'sk',\n            'es',\n            'sv',\n            'tr',\n            'uk',\n            'ur',\n            'vi'\n          ]\n        },\n        llm: {\n          anyOf: [            {\n              type: 'object',\n              title: 'Openai',\n              description: 'Configuration for OpenAI LLM.',\n              properties: {\n                type: {\n                  type: 'string',\n                  title: 'Type',\n                  enum: [                    'openai'\n                  ]\n                }\n              }\n            },\n            {\n              type: 'object',\n              title: 'OpenaiCompatible',\n              description: 'Configuration for an LLM provided by an OpenAI-compatible API.\\n\\nNOTE: The notion of \"OpenAI-compatible API\" seems somewhat fuzzy,\\nthere is no agreed upon standard for what it means. In practice, we\\ncare if the API is compatible with how LiveKit\\'s openai plugin\\ninteracts with the API, i.e. a subset of OpenAI\\'s API specification:\\nhttps://platform.openai.com/docs/api-reference/introduction',\n              properties: {\n                api_id: {\n                  type: 'string',\n                  title: 'Api Id'\n                },\n                model: {\n                  type: 'string',\n                  title: 'Model'\n                },\n                temperature: {\n                  type: 'number',\n                  title: 'Temperature'\n                },\n                type: {\n                  type: 'string',\n                  title: 'Type',\n                  enum: [                    'openai_compatible'\n                  ]\n                }\n              },\n              required: [                'api_id',\n                'model',\n                'temperature'\n              ]\n            }\n          ],\n          title: 'Llm',\n          description: 'Configuration for the LLM to use.'\n        },\n        max_session_length_minutes: {\n          type: 'integer',\n          title: 'Max Session Length Minutes',\n          description: 'The maximum session length in minutes.'\n        },\n        name: {\n          type: 'string',\n          title: 'Name',\n          description: 'The display name to use.'\n        }\n      },\n      required: [        'id',\n        'avatar_id',\n        'system_prompt'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      avatar_id: {
        type: 'string',
        title: 'Avatar Id',
        description: 'The ID of the avatar to use.',
      },
      system_prompt: {
        type: 'string',
        title: 'System Prompt',
        description: 'The system prompt to use.',
      },
      capabilities: {
        type: 'array',
        title: 'Capabilities',
        description: 'The extra capabilities to manage the call.',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'WebcamVision',
              description: 'Capability for agent to visualize user webcam feed.',
              properties: {
                type: {
                  type: 'string',
                  title: 'Type',
                  enum: ['webcam_vision'],
                },
              },
            },
            {
              type: 'object',
              title: 'WakeupMode',
              description: 'Capability for agent to wake up only on specific keywords.',
              properties: {
                triggers: {
                  type: 'array',
                  title: 'Triggers',
                  items: {
                    type: 'string',
                  },
                },
                type: {
                  type: 'string',
                  title: 'Type',
                  enum: ['wakeup_mode'],
                },
              },
              required: ['triggers'],
            },
          ],
          description: 'Capability for agent to visualize user webcam feed.',
        },
      },
      greeting: {
        type: 'string',
        title: 'Greeting',
        description: 'What to say at the start of the session.',
      },
      language: {
        type: 'string',
        title: 'Language',
        description: 'Enum for languages with language codes as values.',
        enum: [
          'ar',
          'bg',
          'zh',
          'cs',
          'da',
          'nl',
          'en',
          'en-AU',
          'en-GB',
          'en-US',
          'fi',
          'fr',
          'fr-CA',
          'fr-FR',
          'de',
          'el',
          'hi',
          'hu',
          'id',
          'it',
          'ja',
          'ko',
          'ms',
          'no',
          'pl',
          'pt',
          'pt-BR',
          'pt-PT',
          'ro',
          'ru',
          'sk',
          'es',
          'sv',
          'tr',
          'uk',
          'ur',
          'vi',
        ],
      },
      llm: {
        anyOf: [
          {
            type: 'object',
            title: 'Openai',
            description: 'Configuration for OpenAI LLM.',
            properties: {
              type: {
                type: 'string',
                title: 'Type',
                enum: ['openai'],
              },
            },
          },
          {
            type: 'object',
            title: 'OpenaiCompatible',
            description:
              'Configuration for an LLM provided by an OpenAI-compatible API.\n\nNOTE: The notion of "OpenAI-compatible API" seems somewhat fuzzy,\nthere is no agreed upon standard for what it means. In practice, we\ncare if the API is compatible with how LiveKit\'s openai plugin\ninteracts with the API, i.e. a subset of OpenAI\'s API specification:\nhttps://platform.openai.com/docs/api-reference/introduction',
            properties: {
              api_id: {
                type: 'string',
                title: 'Api Id',
              },
              model: {
                type: 'string',
                title: 'Model',
              },
              temperature: {
                type: 'number',
                title: 'Temperature',
              },
              type: {
                type: 'string',
                title: 'Type',
                enum: ['openai_compatible'],
              },
            },
            required: ['api_id', 'model', 'temperature'],
          },
        ],
        title: 'Llm',
        description: 'Configuration for the LLM to use.',
      },
      max_session_length_minutes: {
        type: 'integer',
        title: 'Max Session Length Minutes',
        description: 'The maximum session length in minutes.',
      },
      name: {
        type: 'string',
        title: 'Name',
        description: 'The display name to use.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['avatar_id', 'system_prompt'],
  },
  annotations: {},
};

export const handler = async (client: BeyondPresence, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.agent.create(body)));
};

export default { metadata, tool, handler };
