// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Avatar extends APIResource {
  /**
   * List all avatars the owner of the API key has access to.
   *
   * See docs.bey.dev/avatar for more information on avatars.
   */
  list(options?: RequestOptions): APIPromise<AvatarListResponse> {
    return this._client.get('/v1/avatar', options);
  }
}

export type AvatarListResponse = Array<AvatarListResponse.AvatarListResponseItem>;

export namespace AvatarListResponse {
  /**
   * Represents a Beyond Presence Avatar.
   */
  export interface AvatarListResponseItem {
    /**
     * The unique identifier (ID) of the avatar.
     */
    id: string;

    /**
     * The name of the avatar.
     */
    name: string;
  }
}

export declare namespace Avatar {
  export { type AvatarListResponse as AvatarListResponse };
}
