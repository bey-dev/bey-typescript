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
  list(options?: RequestOptions): APIPromise<AgentListResponse> {
    return this._client.get('/v1/agent', options);
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
   * The unique identifier (ID) of this entity.
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

export type AgentListResponse = Array<DeveloperAgentResponse>;

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

export declare namespace Agent {
  export {
    type DeveloperAgentCapability as DeveloperAgentCapability,
    type DeveloperAgentResponse as DeveloperAgentResponse,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
  };
}
