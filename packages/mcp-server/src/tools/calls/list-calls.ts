// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bey-mcp/filtering';
import { Metadata, asTextContentResult } from 'bey-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList the calls managed by your agents.\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      type: 'object',\n      title: '_HasMorePaginationModel',\n      description: 'Pagination model indicating more results are available.',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          description: 'The list of results.',\n          items: {\n            type: 'object',\n            title: 'DeveloperDbModel',\n            description: 'Base class for models saved in our database.',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Id',\n                description: 'Unique identifier of the object in the database.'\n              }\n            },\n            required: [              'id'\n            ]\n          }\n        },\n        next_cursor: {\n          type: 'string',\n          title: 'Next Cursor',\n          description: 'The cursor for the next page of results.'\n        },\n        has_more: {\n          type: 'string',\n          title: 'Has More',\n          description: 'Whether there are more results to fetch.',\n          enum: [            true\n          ]\n        }\n      },\n      required: [        'data',\n        'next_cursor'\n      ]\n    },\n    {\n      type: 'object',\n      title: '_NoMorePaginationModel',\n      description: 'Pagination model indicating no more results.',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          description: 'The list of results.',\n          items: {\n            type: 'object',\n            title: 'DeveloperDbModel',\n            description: 'Base class for models saved in our database.',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Id',\n                description: 'Unique identifier of the object in the database.'\n              }\n            },\n            required: [              'id'\n            ]\n          }\n        },\n        has_more: {\n          type: 'boolean',\n          title: 'Has More',\n          description: 'Whether there are more results to fetch.'\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  ],\n  title: 'Response List Calls V1 Calls Get',\n  description: 'Pagination model indicating more results are available.'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        title: 'Cursor',
        description: 'Cursor for pagination',
      },
      limit: {
        type: 'integer',
        title: 'Limit',
        description: 'The maximum number of calls to return',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.calls.list(body)));
};

export default { metadata, tool, handler };
