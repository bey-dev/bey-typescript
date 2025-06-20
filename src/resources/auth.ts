// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Verify that the request is authenticated using a valid API key.
   */
  verify(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/auth/verify', options);
  }
}

export type AuthVerifyResponse = unknown;

export declare namespace Auth {
  export { type AuthVerifyResponse as AuthVerifyResponse };
}
