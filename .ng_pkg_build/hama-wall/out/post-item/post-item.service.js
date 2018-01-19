/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DbPostService } from '../theme/db-service/db-post.service';
import { Injectable } from '@angular/core';
/**
 * @record
 */
export function IPostInfo() { }
function IPostInfo_tsickle_Closure_declarations() {
    /** @type {?} */
    IPostInfo.prototype.postId;
    /** @type {?} */
    IPostInfo.prototype.userId;
    /** @type {?} */
    IPostInfo.prototype.content;
}
/**
 * @record
 */
export function IFilesArray() { }
function IFilesArray_tsickle_Closure_declarations() {
    /** @type {?} */
    IFilesArray.prototype.blob;
    /** @type {?} */
    IFilesArray.prototype.file;
    /** @type {?} */
    IFilesArray.prototype.choice;
}
export class PostItemService {
    /**
     * @param {?} _dbPostService
     */
    constructor(_dbPostService) {
        this._dbPostService = _dbPostService;
    }
    /**
     * @param {?} files
     * @param {?} filesArray
     * @return {?}
     */
    uploadFunction(files, filesArray) {
        for (let /** @type {?} */ i = 0; i < files.length; i++) {
            // 建立blob預覽用
            let /** @type {?} */ tempBlob;
            window.URL.revokeObjectURL(tempBlob);
            tempBlob = window.URL.createObjectURL(files[i]);
            filesArray.push({
                blob: tempBlob,
                file: files[i],
                choice: false
            });
        }
        return filesArray;
    }
    /**
     * @param {?} filesArray
     * @param {?=} all
     * @return {?}
     */
    removeFunction(filesArray, all = false) {
        // 把有點成true的remove調，remove前先清掉blob記憶體
        for (let /** @type {?} */ i = 0; i < filesArray.length; i++) {
            if (all) {
                window.URL.revokeObjectURL(filesArray[i].blob);
                filesArray.splice(i, 1);
                i--;
            }
            else {
                if (filesArray[i].choice) {
                    window.URL.revokeObjectURL(filesArray[i].blob);
                    filesArray.splice(i, 1);
                    i--;
                }
            }
        }
        return filesArray;
    }
    /**
     * @param {?} files
     * @param {?} info
     * @return {?}
     */
    uplaodFiles(files, info) {
        return this._dbPostService.createFunction(files, info);
    }
}
PostItemService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PostItemService.ctorParameters = () => [
    { type: DbPostService, },
];
function PostItemService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PostItemService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PostItemService.ctorParameters;
    /** @type {?} */
    PostItemService.prototype._dbPostService;
}
//# sourceMappingURL=post-item.service.js.map