// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'bey-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BeyondPresence from '@bey-dev/sdk';

export const metadata: Metadata = {
  resource: 'calls',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/calls',
  operationId: 'list_calls_v1_calls_get',
};

export const tool: Tool = {
  name: 'list_calls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList calls managed by your agents.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/call_list_response',\n  $defs: {\n    call_list_response: {\n      anyOf: [        {\n          type: 'object',\n          title: 'HasMorePage[CallResponse]',\n          properties: {\n            data: {\n              type: 'array',\n              title: 'Data',\n              description: 'List of objects.',\n              items: {\n                type: 'object',\n                title: 'CallResponse',\n                description: 'Response model for a call.',\n                properties: {\n                  id: {\n                    type: 'string',\n                    title: 'Id',\n                    description: 'Unique identifier of the object in the database.'\n                  },\n                  agent_id: {\n                    type: 'string',\n                    title: 'Agent Id',\n                    description: 'ID of agent managing the call.'\n                  },\n                  ended_at: {\n                    type: 'string',\n                    title: 'Ended At',\n                    description: 'End time in ISO 8601 format. If null, call might still be ongoing.'\n                  },\n                  started_at: {\n                    type: 'string',\n                    title: 'Started At',\n                    description: 'Start time in ISO 8601 format.'\n                  },\n                  tags: {\n                    type: 'object',\n                    title: 'Tags',\n                    description: 'Tags for the call',\n                    additionalProperties: true\n                  }\n                },\n                required: [                  'id',\n                  'agent_id',\n                  'ended_at',\n                  'started_at'\n                ]\n              }\n            },\n            next_cursor: {\n              type: 'string',\n              title: 'Next Cursor',\n              description: 'The cursor for the next page of objects.'\n            },\n            has_more: {\n              type: 'string',\n              title: 'Has More',\n              description: 'Whether there are more objects to fetch.',\n              enum: [                true\n              ]\n            }\n          },\n          required: [            'data',\n            'next_cursor'\n          ]\n        },\n        {\n          type: 'object',\n          title: 'NoMorePage[CallResponse]',\n          properties: {\n            data: {\n              type: 'array',\n              title: 'Data',\n              description: 'List of objects.',\n              items: {\n                type: 'object',\n                title: 'CallResponse',\n                description: 'Response model for a call.',\n                properties: {\n                  id: {\n                    type: 'string',\n                    title: 'Id',\n                    description: 'Unique identifier of the object in the database.'\n                  },\n                  agent_id: {\n                    type: 'string',\n                    title: 'Agent Id',\n                    description: 'ID of agent managing the call.'\n                  },\n                  ended_at: {\n                    type: 'string',\n                    title: 'Ended At',\n                    description: 'End time in ISO 8601 format. If null, call might still be ongoing.'\n                  },\n                  started_at: {\n                    type: 'string',\n                    title: 'Started At',\n                    description: 'Start time in ISO 8601 format.'\n                  },\n                  tags: {\n                    type: 'object',\n                    title: 'Tags',\n                    description: 'Tags for the call',\n                    additionalProperties: true\n                  }\n                },\n                required: [                  'id',\n                  'agent_id',\n                  'ended_at',\n                  'started_at'\n                ]\n              }\n            },\n            has_more: {\n              type: 'boolean',\n              title: 'Has More',\n              description: 'Whether there are more objects to fetch.'\n            }\n          },\n          required: [            'data'\n          ]\n        }\n      ],\n      title: 'Response List Calls V1 Calls Get'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        title: 'Cursor',
        description: 'Cursor for pagination.',
      },
      limit: {
        type: 'integer',
        title: 'Limit',
        description: 'Maximum number of objects to return.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BeyondPresence, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.calls.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
