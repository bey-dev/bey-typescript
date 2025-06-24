// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Bey from '@bey-dev/sdk';

export const metadata: Metadata = {
  resource: 'agent',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/agent',
  operationId: 'list_agents_v1_agent_get',
};

export const tool: Tool = {
  name: 'list_agent',
  description: 'List all agents the owner of the API key has access to.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Bey, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.agent.list());
};

export default { metadata, tool, handler };
