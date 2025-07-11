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
  httpPath: '/v1/calls/{call_id}/messages',
  operationId: 'list_messages_v1_calls__call_id__messages_get',
};

export const tool: Tool = {
  name: 'list_messages_calls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList the messages of a call.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  title: 'Response List Messages V1 Calls  Call Id  Messages Get',\n  items: {\n    type: 'object',\n    title: 'DeveloperCallMessageModel',\n    description: 'Model for a call message.',\n    properties: {\n      message: {\n        type: 'string',\n        title: 'Message',\n        description: 'The message content.'\n      },\n      sender: {\n        type: 'string',\n        title: 'Sender',\n        description: 'The sender of the message.',\n        enum: [          'ai',\n          'user'\n        ]\n      },\n      sent_at: {\n        type: 'string',\n        title: 'Sent At',\n        description: 'The time the message was sent in ISO 8601 format.'\n      }\n    },\n    required: [      'message',\n      'sender',\n      'sent_at'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_id: {
        type: 'string',
        title: 'Call Id',
      },
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
  const { call_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.calls.listMessages(call_id)));
};

export default { metadata, tool, handler };
