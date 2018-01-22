import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockViewService } from '@hamastar/block-view';
import { HmDefaultHttpClient } from '@hamastar/http';
import { NgxfUploaderService } from 'ngxf-uploader';
import swal from 'sweetalert2';

import { IFilesArray, IPostInfo } from '../../post-item/post-item.service';
import { IPagination, IPost } from '../models/hhd-model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HamaWallService {
  constructor(
    private _hmDefaultHttpClient: HmDefaultHttpClient,
    private _upload: NgxfUploaderService,
    private _blockViewService: BlockViewService
  ) {}

  get(appOrPostId, skip, take): Observable<IPagination<IPost>> {
    return this._hmDefaultHttpClient.get(
      'http://discuss.hamastar.com.tw/api/Post/{appOrPostId}',
      {
        appOrPostId: appOrPostId,
        skip: skip,
        take: take
      }
    );
  }

  delete(id: string): Observable<void> {
    return this._hmDefaultHttpClient.delete('api/Discuss/{id}', { id: id });
  }

  createFunction(files: IFilesArray[], info: IPostInfo) {
    if (files.length === 0) {
      const tempForm = new FormData();
      tempForm.append('content', info.content);
      return this._hmDefaultHttpClient.post(
        `api/Discuss/{postId}`,
        { postId: info.postId },
        tempForm
      );
    } else {
      const tempArray = [];
      for (let i = 0; i < files.length; i++) {
        tempArray.push(files[i].file);
      }
      return this._upload.upload({
        url: `api/Discuss/${info.postId}`,
        fields: info,
        files: tempArray,
        process: true,
        headers: new HttpHeaders().set(
          'authorization',
          `${sessionStorage.getItem('token')}`
        )
      });
    }
  }
}
