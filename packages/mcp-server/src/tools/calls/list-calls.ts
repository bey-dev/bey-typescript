// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bey-mcp/filtering';
import { asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all calls managed through agents by the owner of the API key.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  title: 'Response List Calls V1 Calls Get',\n  items: {\n    type: 'object',\n    title: 'DeveloperCallResponseModel',\n    description: 'Response model for a call.',\n    properties: {\n      id: {\n        type: 'string',\n        title: 'Id',\n        description: 'The ID of the call.'\n      },\n      agent_id: {\n        type: 'string',\n        title: 'Agent Id',\n        description: 'The ID of the agent handling the call.'\n      },\n      ended_at: {\n        type: 'string',\n        title: 'Ended At',\n        description: 'The end time of the call in ISO 8601 format. If null, the call might still be ongoing.'\n      },\n      started_at: {\n        type: 'string',\n        title: 'Started At',\n        description: 'The start time of the call in ISO 8601 format.'\n      }\n    },\n    required: [      'id',\n      'agent_id',\n      'ended_at',\n      'started_at'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: BeyondPresence, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.calls.list()));
};

export default { metadata, tool, handler };
