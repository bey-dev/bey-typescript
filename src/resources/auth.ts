// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Check whether the `x-api-key` header contains a valid API key. Returns
   * `204 No Content` when the key is valid and `401 Unauthorized` otherwise. Useful
   * as a lightweight connectivity and credential check.
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v1/auth/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
