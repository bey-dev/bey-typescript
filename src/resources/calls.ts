// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Calls extends APIResource {
  /**
   * List the calls managed by your agents.
   */
  list(
    query: CallListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CallListResponse> {
    return this._client.get('/v1/calls', { query, ...options });
  }

  /**
   * List the messages of a call.
   */
  listMessages(callID: string, options?: RequestOptions): APIPromise<CallListMessagesResponse> {
    return this._client.get(path`/v1/calls/${callID}/messages`, options);
  }
}

/**
 * Pagination model indicating more results are available.
 */
export type CallListResponse =
  | CallListResponse._HasMorePaginationModel
  | CallListResponse._NoMorePaginationModel;

export namespace CallListResponse {
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

export type CallListMessagesResponse = Array<CallListMessagesResponse.CallListMessagesResponseItem>;

export namespace CallListMessagesResponse {
  /**
   * Model for a call message.
   */
  export interface CallListMessagesResponseItem {
    /**
     * The message content.
     */
    message: string;

    /**
     * The sender of the message.
     */
    sender: 'ai' | 'user';

    /**
     * The time the message was sent in ISO 8601 format.
     */
    sent_at: string;
  }
}

export interface CallListParams {
  /**
   * Cursor for pagination
   */
  cursor?: string | null;

  /**
   * The maximum number of calls to return
   */
  limit?: number;
}

export declare namespace Calls {
  export {
    type CallListResponse as CallListResponse,
    type CallListMessagesResponse as CallListMessagesResponse,
    type CallListParams as CallListParams,
  };
}
