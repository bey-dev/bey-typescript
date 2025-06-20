// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Calls extends APIResource {
  /**
   * List all calls managed through agents by the owner of the API key.
   */
  list(options?: RequestOptions): APIPromise<CallListResponse> {
    return this._client.get('/v1/calls', options);
  }

  /**
   * List the messages of a call.
   */
  listMessages(callID: string, options?: RequestOptions): APIPromise<CallListMessagesResponse> {
    return this._client.get(path`/v1/calls/${callID}/messages`, options);
  }
}

export type CallListResponse = Array<CallListResponse.CallListResponseItem>;

export namespace CallListResponse {
  /**
   * Model for a call.
   */
  export interface CallListResponseItem {
    /**
     * The ID of the call.
     */
    id: string;

    /**
     * The ID of the agent handling the call.
     */
    agent_id: string;

    /**
     * The end time of the call in ISO 8601 format. If null, the call might still be
     * ongoing.
     */
    ended_at: string | null;

    /**
     * The start time of the call in ISO 8601 format.
     */
    started_at: string;
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

export declare namespace Calls {
  export {
    type CallListResponse as CallListResponse,
    type CallListMessagesResponse as CallListMessagesResponse,
  };
}
