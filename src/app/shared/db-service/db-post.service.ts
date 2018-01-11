import { Injectable } from '@angular/core';
import { HmDefaultHttpClient } from '@hamastar/http';

@Injectable()
export class DbPostService {

  constructor(private _hmDefaultHttpClient: HmDefaultHttpClient) { }

  get(appOrPostId = 'fa24db79-373e-46cb-b083-9c5b8f7e6d40') {
    return this._hmDefaultHttpClient.get('api/Post/{appOrPostId}', { appOrPostId: appOrPostId });
  }

}
