import { IPostInfo } from '../post-item/post-item.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../../theme/models/hhd-model';
import { WallItemService } from './wall-item.service';
import { AutoDestroy } from '../../../shared/base/auto.destroy';

@Component({
  selector: 'app-wall-item',
  templateUrl: './wall-item.component.html',
  styleUrls: ['./wall-item.component.scss']
})
export class WallItemComponent extends AutoDestroy implements OnInit {

  // po文內容
  @Input() post: IPost;

  // 刪除玩要傳出去的output
  @Output() deleteAction = new EventEmitter();

  textContent: string;

  constructor(
    private _wallItemService: WallItemService
  ) { super(); }

  ngOnInit() {

  }

  // 刪除的funtion
  deleteItem() {
    this._wallItemService.deleteItem(this.post.id)
      .takeUntil(this._destroy$)
      .subscribe(x => {
        this.deleteAction.emit(this.post);
      });
  }

  // 回文
  reply() {
    // 塞好要新增的資訊
    let info: IPostInfo = {
      postId: this.post.id,
      userId: 'kevinwang6303',
      content: this.textContent
    };
    this._wallItemService.replyItem([], info)
      .takeUntil(this._destroy$)
      .subscribe((data: IPost) => {
        this.post.reply.push(data);
        this.textContent = '';
      });
  }
}
