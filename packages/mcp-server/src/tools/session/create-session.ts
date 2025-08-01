// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bey-mcp/filtering';
import { Metadata, asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BeyondPresence from '@bey-dev/sdk';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nWith the Beyond Presence Real-Time API you are able to turn audio and text into\nhyper-realistic avatars in real-time.\n\nOnce a session is created, the selected avatar will automatically join the\nWebRTC room and will start streaming audio and video to the user.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/session',\n  $defs: {\n    session: {\n      type: 'object',\n      title: 'SessionResponseModel',\n      description: 'Represents a Beyond Presence Real-Time API session.',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id',\n          description: 'Unique identifier of the object.'\n        },\n        avatar_id: {\n          type: 'string',\n          title: 'Avatar Id',\n          description: 'The ID of the avatar used in the session.'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'The timestamp of when the session was created.',\n          format: 'date-time'\n        },\n        livekit_token: {\n          type: 'string',\n          title: 'Livekit Token',\n          description: 'The LiveKit token used to join your LiveKit room.'\n        },\n        livekit_url: {\n          type: 'string',\n          title: 'Livekit Url',\n          description: 'The LiveKit URL you chose when creating your LiveKit project.'\n        }\n      },\n      required: [        'id',\n        'avatar_id',\n        'created_at',\n        'livekit_token',\n        'livekit_url'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['avatar_id', 'livekit_token', 'livekit_url'],
  },
  annotations: {},
};

export const handler = async (client: BeyondPresence, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.session.create(body)));
};

export default { metadata, tool, handler };
