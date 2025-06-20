// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Bey } from '../client';

export abstract class APIResource {
  protected _client: Bey;

  constructor(client: Bey) {
    this._client = client;
  }
}
