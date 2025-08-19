// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SessionResource extends APIResource {
  /**
   * With the Beyond Presence Real-Time API you are able to turn audio and text into
   * hyper-realistic avatars in real-time.
   *
   * Once a session is created, the selected avatar will automatically join the
   * WebRTC room and will start streaming audio and video to the user.
   */
  create(body: SessionCreateParams, options?: RequestOptions): APIPromise<Session> {
    return this._client.post('/v1/session', { body, ...options });
  }

  /**
   * Get a Real-Time API session by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Session> {
    return this._client.get(path`/v1/session/${id}`, options);
  }

  /**
   * List all Real-Time API sessions that the owner of the API key has started.
   */
  list(options?: RequestOptions): APIPromise<SessionListResponse> {
    return this._client.get('/v1/session', options);
  }
}

/**
 * Represents a Beyond Presence Real-Time API session.
 */
export interface Session {
  /**
   * Unique identifier of the object in the database.
   */
  id: string;

  /**
   * The ID of the avatar used in the session.
   */
  avatar_id: string;

  /**
   * The timestamp of when the session was created.
   */
  created_at: string;

  /**
   * The LiveKit token used to join your LiveKit room.
   */
  livekit_token: string;

  /**
   * The LiveKit URL you chose when creating your LiveKit project.
   */
  livekit_url: string;
}

export type SessionListResponse = Array<Session>;

export interface SessionCreateParams {
  /**
   * The ID of the avatar to use in the session.
   */
  avatar_id: string;

  /**
   * The LiveKit token used to join your LiveKit room.
   */
  livekit_token: string;

  /**
   * The LiveKit URL you chose when creating your LiveKit project.
   */
  livekit_url: string;
}

export declare namespace SessionResource {
  export {
    type Session as Session,
    type SessionListResponse as SessionListResponse,
    type SessionCreateParams as SessionCreateParams,
  };
}
