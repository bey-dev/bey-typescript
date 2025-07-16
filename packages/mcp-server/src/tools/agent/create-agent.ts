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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an agent.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/developer_agent_response',\n  $defs: {\n    developer_agent_response: {\n      type: 'object',\n      title: 'DeveloperAgentResponseModel',\n      description: 'Response model for the agent.',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id',\n          description: 'The unique identifier (ID) of this entity.'\n        },\n        avatar_id: {\n          type: 'string',\n          title: 'Avatar Id',\n          description: 'The ID of the avatar to use.'\n        },\n        system_prompt: {\n          type: 'string',\n          title: 'System Prompt',\n          description: 'The system prompt to use.'\n        },\n        capabilities: {\n          type: 'array',\n          title: 'Capabilities',\n          description: 'The extra capabilities to manage the call.',\n          items: {\n            $ref: '#/$defs/developer_agent_capability'\n          }\n        },\n        greeting: {\n          type: 'string',\n          title: 'Greeting',\n          description: 'What to say at the start of the session.'\n        },\n        language: {\n          type: 'string',\n          title: 'Language',\n          description: 'Enum for languages with language codes as values.',\n          enum: [            'bg',\n            'zh',\n            'cs',\n            'da',\n            'nl',\n            'en',\n            'en-AU',\n            'en-GB',\n            'en-US',\n            'fi',\n            'fr',\n            'fr-CA',\n            'fr-FR',\n            'de',\n            'el',\n            'hi',\n            'hu',\n            'id',\n            'it',\n            'ja',\n            'ko',\n            'ms',\n            'no',\n            'pl',\n            'pt',\n            'pt-BR',\n            'pt-PT',\n            'ro',\n            'ru',\n            'sk',\n            'es',\n            'sv',\n            'tr',\n            'uk',\n            'vi'\n          ]\n        },\n        max_session_length_minutes: {\n          type: 'integer',\n          title: 'Max Session Length Minutes',\n          description: 'The maximum session length in minutes.'\n        },\n        name: {\n          type: 'string',\n          title: 'Name',\n          description: 'The display name to use.'\n        }\n      },\n      required: [        'id',\n        'avatar_id',\n        'system_prompt'\n      ]\n    },\n    developer_agent_capability: {\n      type: 'string',\n      title: 'DeveloperAgentCapability',\n      description: 'Enum for agent capabilities.',\n      enum: [        'webcam_vision',\n        'silent_mode'\n      ]\n    }\n  }\n}\n```",
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
          $ref: '#/$defs/developer_agent_capability',
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
          'vi',
        ],
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
    $defs: {
      developer_agent_capability: {
        type: 'string',
        title: 'DeveloperAgentCapability',
        description: 'Enum for agent capabilities.',
        enum: ['webcam_vision', 'silent_mode'],
      },
    },
  },
};

export const handler = async (client: BeyondPresence, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.agent.create(body)));
};

export default { metadata, tool, handler };
