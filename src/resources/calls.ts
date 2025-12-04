// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Calls extends APIResource {
  /**
   * List calls managed by your agents.
   */
  list(
    query: CallListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CallListResponse> {
    return this._client.get('/v1/calls', { query, ...options });
  }
}

export type CallListResponse =
  | CallListResponse.HasMorePageCallResponse
  | CallListResponse.NoMorePageCallResponse;

export namespace CallListResponse {
  export interface HasMorePageCallResponse {
    /**
     * List of objects.
     */
    data: Array<HasMorePageCallResponse.Data>;

    /**
     * The cursor for the next page of objects.
     */
    next_cursor: string;

    /**
     * Whether there are more objects to fetch.
     */
    has_more?: true;
  }

  export namespace HasMorePageCallResponse {
    /**
     * Response model for a call.
     */
    export interface Data {
      /**
       * Unique identifier of the object in the database.
       */
      id: string;

      /**
       * ID of agent managing the call.
       */
      agent_id: string;

      /**
       * Status for call that has not yet started.
       */
      status: Data.ToStartCallStatus | Data.OngoingCallStatus | Data.CompletedCallStatus;

      /**
       * Tags for the call
       */
      tags?: { [key: string]: string };
    }

    export namespace Data {
      /**
       * Status for call that has not yet started.
       */
      export interface ToStartCallStatus {
        type?: 'to_start';
      }

      /**
       * Status for call that is currently ongoing.
       */
      export interface OngoingCallStatus {
        /**
         * Start time in ISO 8601 format.
         */
        started_at: string;

        type?: 'ongoing';
      }

      /**
       * Status for call that has completed.
       */
      export interface CompletedCallStatus {
        /**
         * End time in ISO 8601 format.
         */
        ended_at: string;

        /**
         * Start time in ISO 8601 format.
         */
        started_at: string;

        type?: 'completed';
      }
    }
  }

  export interface NoMorePageCallResponse {
    /**
     * List of objects.
     */
    data: Array<NoMorePageCallResponse.Data>;

    /**
     * Whether there are more objects to fetch.
     */
    has_more?: boolean;
  }

  export namespace NoMorePageCallResponse {
    /**
     * Response model for a call.
     */
    export interface Data {
      /**
       * Unique identifier of the object in the database.
       */
      id: string;

      /**
       * ID of agent managing the call.
       */
      agent_id: string;

      /**
       * Status for call that has not yet started.
       */
      status: Data.ToStartCallStatus | Data.OngoingCallStatus | Data.CompletedCallStatus;

      /**
       * Tags for the call
       */
      tags?: { [key: string]: string };
    }

    export namespace Data {
      /**
       * Status for call that has not yet started.
       */
      export interface ToStartCallStatus {
        type?: 'to_start';
      }

      /**
       * Status for call that is currently ongoing.
       */
      export interface OngoingCallStatus {
        /**
         * Start time in ISO 8601 format.
         */
        started_at: string;

        type?: 'ongoing';
      }

      /**
       * Status for call that has completed.
       */
      export interface CompletedCallStatus {
        /**
         * End time in ISO 8601 format.
         */
        ended_at: string;

        /**
         * Start time in ISO 8601 format.
         */
        started_at: string;

        type?: 'completed';
      }
    }
  }
}

export interface CallListParams {
  /**
   * Cursor for pagination.
   */
  cursor?: string | null;

  /**
   * Maximum number of objects to return.
   */
  limit?: number;
}

export declare namespace Calls {
  export { type CallListResponse as CallListResponse, type CallListParams as CallListParams };
}
