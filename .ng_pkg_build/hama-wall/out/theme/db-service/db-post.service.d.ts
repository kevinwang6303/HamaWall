import { BlockViewService } from '@hamastar/block-view';
import { HmDefaultHttpClient } from '@hamastar/http';
import { NgxfUploaderService } from 'ngxf-uploader';
import { IFilesArray, IPostInfo } from '../../post-item/post-item.service';
import { IPagination, IPost } from '../models/hhd-model';
import { Observable } from 'rxjs/Observable';
export declare class DbPostService {
    private _hmDefaultHttpClient;
    private _upload;
    private _blockViewService;
    constructor(_hmDefaultHttpClient: HmDefaultHttpClient, _upload: NgxfUploaderService, _blockViewService: BlockViewService);
    get(appOrPostId: any, skip: any, take: any): Observable<IPagination<IPost>>;
    delete(id: string): Observable<void>;
    createFunction(files: IFilesArray[], info: IPostInfo): Observable<any>;
}
