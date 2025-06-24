// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { BeyondPresence } from '../client';

export abstract class APIResource {
  protected _client: BeyondPresence;

  constructor(client: BeyondPresence) {
    this._client = client;
  }
}
