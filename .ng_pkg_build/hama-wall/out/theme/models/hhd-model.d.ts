export interface IPagination<T> {
    pageIndex: number;
    perPageCount: number;
    totalCount: number;
    result: T[];
}
export interface IPost {
    id: string;
    applicationId: string;
    parentId: string;
    userId: string;
    content: string;
    time: string;
    files: IFile[];
    reply: IPost[];
}
export interface IFile {
    id: string;
    postId: string;
    fileName: string;
    contentType: string;
    url: string;
}
