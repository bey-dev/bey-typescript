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
  list(
    query: AvatarListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AvatarListResponse> {
    return this._client.get('/v1/avatar', { query, ...options });
  }
}

/**
 * Pagination model indicating more results are available.
 */
export type AvatarListResponse =
  | AvatarListResponse._HasMorePaginationModel
  | AvatarListResponse._NoMorePaginationModel;

export namespace AvatarListResponse {
  /**
   * Pagination model indicating more results are available.
   */
  export interface _HasMorePaginationModel {
    /**
     * The list of results.
     */
    data: Array<_HasMorePaginationModel.Data>;

    /**
     * The cursor for the next page of results.
     */
    next_cursor: string;

    /**
     * Whether there are more results to fetch.
     */
    has_more?: true;
  }

  export namespace _HasMorePaginationModel {
    /**
     * Base class for response models.
     */
    export interface Data {
      /**
       * Unique identifier of the object.
       */
      id: string;
    }
  }

  /**
   * Pagination model indicating no more results.
   */
  export interface _NoMorePaginationModel {
    /**
     * The list of results.
     */
    data: Array<_NoMorePaginationModel.Data>;

    /**
     * Whether there are more results to fetch.
     */
    has_more?: boolean;
  }

  export namespace _NoMorePaginationModel {
    /**
     * Base class for response models.
     */
    export interface Data {
      /**
       * Unique identifier of the object.
       */
      id: string;
    }
  }
}

export interface AvatarListParams {
  /**
   * Cursor for pagination
   */
  cursor?: string | null;

  /**
   * The maximum number of avatars to return
   */
  limit?: number;
}

export declare namespace Avatar {
  export { type AvatarListResponse as AvatarListResponse, type AvatarListParams as AvatarListParams };
}
