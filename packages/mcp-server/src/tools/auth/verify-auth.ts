// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description: 'Verify authentication with API key.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BeyondPresence, args: Record<string, unknown> | undefined) => {
  const response = await client.auth.verify().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
