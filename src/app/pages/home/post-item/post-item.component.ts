import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PostItemService, IFilesArray, IPostInfo } from './post-item.service';
import swal from 'sweetalert2';

import { AutoDestroy } from '@hamastar/auto-destroy';
import { IPost } from '../theme/models/hhd-model';
import { BlockViewService } from '@hamastar/block-view';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent extends AutoDestroy implements OnInit {
  // 發文頁面用到的今天日期
  today = new Date();

  // 欲上傳的array
  filesArray: IFilesArray[] = [];

  // 要發文的內容
  textContent: string;

  @Input() postId: string;

  @Input() userId: string;

  @Output() addItem = new EventEmitter();

  constructor(
    private _postItemService: PostItemService,
    private _blockViewService: BlockViewService
  ) {
    super();
  }

  ngOnInit() {}

  // 選擇要刪掉的檔案
  choiceItem(item) {
    item.choice = !item.choice;
  }

  uploadFile(files: File[]) {
    // 限制max 10個檔案上傳
    if (
      this.filesArray.length === 10 ||
      this.filesArray.length + files.length > 10
    ) {
      swal({
        title: '警告!',
        text: '最多只能上傳10個檔案',
        type: 'warning'
      });
      return;
    }

    // 去service邏輯處理
    this.filesArray = this._postItemService.uploadFunction(
      files,
      this.filesArray
    );
  }

  remove() {
    // 去service邏輯處理
    this.filesArray = this._postItemService.removeFunction(this.filesArray);
  }

  shared() {
    // 因為沒有經過base，所以要自己呼叫block起來
    this._blockViewService.block();
    // 塞好要新增的資訊
    const info: IPostInfo = {
      postId: this.postId,
      userId: this.userId,
      content: this.textContent
    };
    this._postItemService.uplaodFiles(this.filesArray, info).subscribe(
      (x: any) => {
        if (x.data) {
          // 讓外面知道發文了
          this.addItem.emit(x.data);
          // 把照片清掉
          this.filesArray = this._postItemService.removeFunction(
            this.filesArray,
            true
          );
          // 嚴謹一點把array變0
          this.filesArray.length = 0;
          this.textContent = '';
          this._blockViewService.unblock();
        }
      },
      error => {
        this._blockViewService.unblock();
        swal({
          title: '錯誤訊息!!!',
          text: '伺服器發生錯誤，請聯絡管理者!',
          type: 'error'
        });
      }
    );
  }
}
