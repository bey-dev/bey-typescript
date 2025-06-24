// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Bey from '@bey-dev/sdk';

export const metadata: Metadata = {
  resource: 'avatar',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/avatar',
  operationId: 'list_avatars_v1_avatar_get',
};

export const tool: Tool = {
  name: 'list_avatar',
  description:
    'List all avatars the owner of the API key has access to.\n\nSee docs.bey.dev/avatar for more information on avatars.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Bey, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.avatar.list());
};

export default { metadata, tool, handler };
