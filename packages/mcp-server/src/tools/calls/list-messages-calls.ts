// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Bey from 'bey';

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
  description: 'List the messages of a call.',
  inputSchema: {
    type: 'object',
    properties: {
      call_id: {
        type: 'string',
        title: 'Call Id',
      },
    },
  },
};

export const handler = async (client: Bey, args: Record<string, unknown> | undefined) => {
  const { call_id, ...body } = args as any;
  return asTextContentResult(await client.calls.listMessages(call_id));
};

export default { metadata, tool, handler };
