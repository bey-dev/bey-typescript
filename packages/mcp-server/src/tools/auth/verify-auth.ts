// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BeyondPresence from '@bey-dev/sdk';

export const metadata: Metadata = {
  resource: 'auth',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/auth/verify',
  operationId: 'verify_v1_auth_verify_get',
};

export const tool: Tool = {
  name: 'verify_auth',
  description: 'Verify that the request is authenticated using a valid API key.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: BeyondPresence, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.auth.verify()) as object);
};

export default { metadata, tool, handler };
