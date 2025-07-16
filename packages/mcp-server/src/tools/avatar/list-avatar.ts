// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bey-mcp/filtering';
import { Metadata, asTextContentResult } from 'bey-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BeyondPresence from '@bey-dev/sdk';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all avatars the owner of the API key has access to.\n\nSee docs.bey.dev/avatar for more information on avatars.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  title: 'Response List Avatars V1 Avatar Get',\n  items: {\n    type: 'object',\n    title: 'AvatarResponseModel',\n    description: 'Represents a Beyond Presence Avatar.',\n    properties: {\n      id: {\n        type: 'string',\n        title: 'Id',\n        description: 'The unique identifier (ID) of the avatar.'\n      },\n      name: {\n        type: 'string',\n        title: 'Name',\n        description: 'The name of the avatar.'\n      }\n    },\n    required: [      'id',\n      'name'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: BeyondPresence, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.avatar.list()));
};

export default { metadata, tool, handler };
