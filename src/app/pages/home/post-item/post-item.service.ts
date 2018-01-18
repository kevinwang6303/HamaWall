import { DbPostService } from '../../../theme/db-service/db-post.service';

import { Injectable } from '@angular/core';

export interface IPostInfo {
  postId: string;
  userId: string;
  content: string;
}

export interface IFilesArray {
  blob: string;
  file: File;
  choice: boolean;
}

@Injectable()
export class PostItemService {

  constructor(
    private _dbPostService: DbPostService
  ) { }

  uploadFunction(files: File[], filesArray: IFilesArray[]) {
    for (let i = 0; i < files.length; i++) {
      // 建立blob預覽用
      let tempBlob;
      window.URL.revokeObjectURL(tempBlob);
      tempBlob = window.URL.createObjectURL(files[i]);
      filesArray.push(
        {
          blob: tempBlob,
          file: files[i],
          choice: false
        }
      );
    }
    return filesArray;
  }

  removeFunction(filesArray: IFilesArray[], all = false) {
    // 把有點成true的remove調，remove前先清掉blob記憶體

    for (let i = 0; i < filesArray.length; i++) {

      if (all) {
        window.URL.revokeObjectURL(filesArray[i].blob);
        filesArray.splice(i, 1);
        i--;
      } else {
        if (filesArray[i].choice) {
          window.URL.revokeObjectURL(filesArray[i].blob);
          filesArray.splice(i, 1);
          i--;
        }
      }
    }

    return filesArray;
  }

  uplaodFiles(files: IFilesArray[], info: IPostInfo) {

    return this._dbPostService.createFunction(files, info);
  }
}
