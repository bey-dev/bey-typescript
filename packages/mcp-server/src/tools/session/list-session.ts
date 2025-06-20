// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Bey from 'bey';

export const metadata: Metadata = {
  resource: 'session',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/session',
  operationId: 'list_session_v1_session_get',
};

export const tool: Tool = {
  name: 'list_session',
  description: 'List all Real-Time API sessions that the owner of the API key has started.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Bey, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.session.list());
};

export default { metadata, tool, handler };
