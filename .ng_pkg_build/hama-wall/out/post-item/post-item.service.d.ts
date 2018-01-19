import { Observable } from 'rxjs/Observable';
import { DbPostService } from '../theme/db-service/db-post.service';
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
export declare class PostItemService {
    private _dbPostService;
    constructor(_dbPostService: DbPostService);
    uploadFunction(files: File[], filesArray: IFilesArray[]): IFilesArray[];
    removeFunction(filesArray: IFilesArray[], all?: boolean): IFilesArray[];
    uplaodFiles(files: IFilesArray[], info: IPostInfo): Observable<any>;
}
