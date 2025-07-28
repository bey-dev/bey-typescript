// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Agent extends APIResource {
  /**
   * Create an agent.
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<DeveloperAgentResponse> {
    return this._client.post('/v1/agent', { body, ...options });
  }

  /**
   * List all agents the owner of the API key has access to.
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/v1/agent', { query, ...options });
  }

  /**
   * Delete an agent.
   */
  delete(agentID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/agent/${agentID}`, options);
  }
}

/**
 * Enum for agent capabilities.
 */
export type DeveloperAgentCapability = 'webcam_vision';

/**
 * Response model for the agent.
 */
export interface DeveloperAgentResponse {
  /**
   * Unique identifier of the object.
   */
  id: string;

  /**
   * The ID of the avatar to use.
   */
  avatar_id: string;

  /**
   * The system prompt to use.
   */
  system_prompt: string;

  /**
   * The extra capabilities to manage the call.
   */
  capabilities?: Array<DeveloperAgentCapability>;

  /**
   * What to say at the start of the session.
   */
  greeting?: string | null;

  /**
   * Enum for languages with language codes as values.
   */
  language?:
    | 'ar'
    | 'bg'
    | 'zh'
    | 'cs'
    | 'da'
    | 'nl'
    | 'en'
    | 'en-AU'
    | 'en-GB'
    | 'en-US'
    | 'fi'
    | 'fr'
    | 'fr-CA'
    | 'fr-FR'
    | 'de'
    | 'el'
    | 'hi'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'ms'
    | 'no'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'es'
    | 'sv'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'vi'
    | null;

  /**
   * The maximum session length in minutes.
   */
  max_session_length_minutes?: number | null;

  /**
   * The display name to use.
   */
  name?: string | null;
}

/**
 * Pagination model indicating more results are available.
 */
export type AgentListResponse =
  | AgentListResponse._HasMorePaginationModel
  | AgentListResponse._NoMorePaginationModel;

export namespace AgentListResponse {
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

export type AgentDeleteResponse = unknown;

export interface AgentCreateParams {
  /**
   * The ID of the avatar to use.
   */
  avatar_id: string;

  /**
   * The system prompt to use.
   */
  system_prompt: string;

  /**
   * The extra capabilities to manage the call.
   */
  capabilities?: Array<DeveloperAgentCapability>;

  /**
   * What to say at the start of the session.
   */
  greeting?: string | null;

  /**
   * Enum for languages with language codes as values.
   */
  language?:
    | 'ar'
    | 'bg'
    | 'zh'
    | 'cs'
    | 'da'
    | 'nl'
    | 'en'
    | 'en-AU'
    | 'en-GB'
    | 'en-US'
    | 'fi'
    | 'fr'
    | 'fr-CA'
    | 'fr-FR'
    | 'de'
    | 'el'
    | 'hi'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'ms'
    | 'no'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'es'
    | 'sv'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'vi'
    | null;

  /**
   * The maximum session length in minutes.
   */
  max_session_length_minutes?: number | null;

  /**
   * The display name to use.
   */
  name?: string | null;
}

export interface AgentListParams {
  /**
   * Cursor for pagination
   */
  cursor?: string | null;

  /**
   * The maximum number of agents to return
   */
  limit?: number;
}

export declare namespace Agent {
  export {
    type DeveloperAgentCapability as DeveloperAgentCapability,
    type DeveloperAgentResponse as DeveloperAgentResponse,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentListParams as AgentListParams,
  };
}
