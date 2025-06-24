// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BeyondPresence from '@bey-dev/sdk';

export const metadata: Metadata = {
  resource: 'agent',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/agent',
  operationId: 'create_agent_v1_agent_post',
};

export const tool: Tool = {
  name: 'create_agent',
  description: 'Create an agent.',
  inputSchema: {
    type: 'object',
    properties: {
      avatar_id: {
        type: 'string',
        title: 'Avatar Id',
        description: 'The ID of the avatar to use.',
      },
      system_prompt: {
        type: 'string',
        title: 'System Prompt',
        description: 'The system prompt to use.',
      },
      capabilities: {
        type: 'array',
        title: 'Capabilities',
        description: 'The agent capabilities.',
        items: {
          $ref: '#/$defs/developer_agent_capability',
        },
      },
      greeting: {
        type: 'string',
        title: 'Greeting',
        description: 'What to say at the start of the session.',
      },
      language: {
        type: 'string',
        title: 'Language',
        description: 'The language to use.',
      },
      max_session_length_minutes: {
        type: 'integer',
        title: 'Max Session Length Minutes',
        description: 'The maximum session length in minutes.',
      },
      name: {
        type: 'string',
        title: 'Name',
        description: 'The agent name.',
      },
    },
    $defs: {
      developer_agent_capability: {
        type: 'string',
        title: 'DeveloperAgentCapability',
        description: 'Enum for agent capabilities.',
        enum: ['webcam_vision'],
      },
    },
  },
};

export const handler = async (client: BeyondPresence, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.agent.create(body));
};

export default { metadata, tool, handler };
