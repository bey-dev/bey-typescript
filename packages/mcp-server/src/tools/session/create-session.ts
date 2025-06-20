// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Bey from 'bey';

export const metadata: Metadata = {
  resource: 'session',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/session',
  operationId: 'create_session_v1_session_post',
};

export const tool: Tool = {
  name: 'create_session',
  description:
    'With the Beyond Presence Real-Time API you are able to turn audio and text into\nhyper-realistic avatars in real-time.\n\nOnce a session is created, the selected avatar will automatically join the\nWebRTC room and will start streaming audio and video to the user.',
  inputSchema: {
    type: 'object',
    properties: {
      avatar_id: {
        type: 'string',
        title: 'Avatar Id',
        description: 'The ID of the avatar to use in the session.',
      },
      livekit_token: {
        type: 'string',
        title: 'Livekit Token',
        description: 'The LiveKit token used to join your LiveKit room.',
      },
      livekit_url: {
        type: 'string',
        title: 'Livekit Url',
        description: 'The LiveKit URL you chose when creating your LiveKit project.',
      },
    },
  },
};

export const handler = async (client: Bey, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.session.create(body));
};

export default { metadata, tool, handler };
