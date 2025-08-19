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
   * List the available agents.
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
 * Response model for the agent.
 */
export interface DeveloperAgentResponse {
  /**
   * Unique identifier of the object in the database.
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
  capabilities?: Array<DeveloperAgentResponse.WebcamVision | DeveloperAgentResponse.WakeupMode>;

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
   * Configuration for the LLM to use.
   */
  llm?: DeveloperAgentResponse.OpenAI | DeveloperAgentResponse.OpenAICompatible | null;

  /**
   * The maximum session length in minutes.
   */
  max_session_length_minutes?: number | null;

  /**
   * The display name to use.
   */
  name?: string | null;
}

export namespace DeveloperAgentResponse {
  /**
   * Capability for agent to visualize user webcam feed.
   */
  export interface WebcamVision {
    type?: 'webcam_vision';
  }

  /**
   * Capability for agent to wake up only on specific keywords.
   */
  export interface WakeupMode {
    triggers: Array<string>;

    type?: 'wakeup_mode';
  }

  /**
   * Configuration for OpenAI LLM.
   */
  export interface OpenAI {
    type?: 'openai';
  }

  /**
   * Configuration for an LLM provided by an OpenAI-compatible API.
   *
   * NOTE: The notion of "OpenAI-compatible API" seems somewhat fuzzy, there is no
   * agreed upon standard for what it means. In practice, we care if the API is
   * compatible with how LiveKit's openai plugin interacts with the API, i.e. a
   * subset of OpenAI's API specification:
   * https://platform.openai.com/docs/api-reference/introduction
   */
  export interface OpenAICompatible {
    api_id: string;

    model: string;

    temperature: number;

    type?: 'openai_compatible';
  }
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
     * Base class for models saved in our database.
     */
    export interface Data {
      /**
       * Unique identifier of the object in the database.
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
     * Base class for models saved in our database.
     */
    export interface Data {
      /**
       * Unique identifier of the object in the database.
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
  capabilities?: Array<AgentCreateParams.WebcamVision | AgentCreateParams.WakeupMode>;

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
   * Configuration for the LLM to use.
   */
  llm?: AgentCreateParams.OpenAI | AgentCreateParams.OpenAICompatible | null;

  /**
   * The maximum session length in minutes.
   */
  max_session_length_minutes?: number | null;

  /**
   * The display name to use.
   */
  name?: string | null;
}

export namespace AgentCreateParams {
  /**
   * Capability for agent to visualize user webcam feed.
   */
  export interface WebcamVision {
    type?: 'webcam_vision';
  }

  /**
   * Capability for agent to wake up only on specific keywords.
   */
  export interface WakeupMode {
    triggers: Array<string>;

    type?: 'wakeup_mode';
  }

  /**
   * Configuration for OpenAI LLM.
   */
  export interface OpenAI {
    type?: 'openai';
  }

  /**
   * Configuration for an LLM provided by an OpenAI-compatible API.
   *
   * NOTE: The notion of "OpenAI-compatible API" seems somewhat fuzzy, there is no
   * agreed upon standard for what it means. In practice, we care if the API is
   * compatible with how LiveKit's openai plugin interacts with the API, i.e. a
   * subset of OpenAI's API specification:
   * https://platform.openai.com/docs/api-reference/introduction
   */
  export interface OpenAICompatible {
    api_id: string;

    model: string;

    temperature: number;

    type?: 'openai_compatible';
  }
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
    type DeveloperAgentResponse as DeveloperAgentResponse,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentListParams as AgentListParams,
  };
}
