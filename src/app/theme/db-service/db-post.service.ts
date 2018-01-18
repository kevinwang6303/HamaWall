import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockViewService } from '@hamastar/block-view';
import { HmDefaultHttpClient } from '@hamastar/http';
import { NgxfUploaderService } from 'ngxf-uploader';
import swal from 'sweetalert2';

import { IFilesArray, IPostInfo } from '../../pages/home/post-item/post-item.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DbPostService {

  constructor(
    private _hmDefaultHttpClient: HmDefaultHttpClient,
    private _upload: NgxfUploaderService,
    private _blockViewService: BlockViewService
  ) { }

  get(appOrPostId, skip, take) {
    return this._hmDefaultHttpClient.get('http://localhost:50696/api/Post/{appOrPostId}',
      {
        appOrPostId: appOrPostId,
        skip: skip,
        take: take
      });
  }

  delete(id: string) {
    return this._hmDefaultHttpClient.delete('api/Post/{id}', { id: id });
  }

  createFunction(files: IFilesArray[], info: IPostInfo) {

    if (files.length === 0) {

      let tempForm = new FormData();
      tempForm.append('content', info.content);
      return this._hmDefaultHttpClient.post(`api/Post/{postId}`, { postId: info.postId }, tempForm);

    } else {

      let tempArray = [];
      for (let i = 0; i < files.length; i++) {
        tempArray.push(files[i].file);
      }
      return this._upload.upload({
        url: `api/Post/${info.postId}`,
        fields: info,
        files: tempArray,
        process: true,
        headers: new HttpHeaders().set('authorization', `Bearer ${sessionStorage.getItem('token')}`)
      });
    }
  }
}
