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
  httpPath: '/v1/calls',
  operationId: 'list_calls_v1_calls_get',
};

export const tool: Tool = {
  name: 'list_calls',
  description: 'List all calls managed through agents by the owner of the API key.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Bey, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.calls.list());
};

export default { metadata, tool, handler };
