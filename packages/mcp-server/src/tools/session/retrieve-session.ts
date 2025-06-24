// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Bey from '@bey-dev/sdk';

export const metadata: Metadata = {
  resource: 'session',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/session/{id}',
  operationId: 'get_session_v1_session__id__get',
};

export const tool: Tool = {
  name: 'retrieve_session',
  description: 'Get a Real-Time API session by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        title: 'Id',
      },
    },
  },
};

export const handler = async (client: Bey, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.session.retrieve(id));
};

export default { metadata, tool, handler };
