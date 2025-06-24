// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Bey from '@bey-dev/sdk';

export const metadata: Metadata = {
  resource: 'agent',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/agent/{agent_id}',
  operationId: 'delete_agent_v1_agent__agent_id__delete',
};

export const tool: Tool = {
  name: 'delete_agent',
  description: 'Delete an agent.',
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
    },
  },
};

export const handler = async (client: Bey, args: Record<string, unknown> | undefined) => {
  const { agent_id, ...body } = args as any;
  return asTextContentResult((await client.agent.delete(agent_id)) as object);
};

export default { metadata, tool, handler };
