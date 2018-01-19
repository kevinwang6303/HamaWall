/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockViewService } from '@hamastar/block-view';
import { HmDefaultHttpClient } from '@hamastar/http';
import { NgxfUploaderService } from 'ngxf-uploader';
export class DbPostService {
    /**
     * @param {?} _hmDefaultHttpClient
     * @param {?} _upload
     * @param {?} _blockViewService
     */
    constructor(_hmDefaultHttpClient, _upload, _blockViewService) {
        this._hmDefaultHttpClient = _hmDefaultHttpClient;
        this._upload = _upload;
        this._blockViewService = _blockViewService;
    }
    /**
     * @param {?} appOrPostId
     * @param {?} skip
     * @param {?} take
     * @return {?}
     */
    get(appOrPostId, skip, take) {
        return this._hmDefaultHttpClient.get('http://discuss.hamastar.com.tw/api/Post/{appOrPostId}', {
            appOrPostId: appOrPostId,
            skip: skip,
            take: take
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    delete(id) {
        return this._hmDefaultHttpClient.delete('api/Discuss/{id}', { id: id });
    }
    /**
     * @param {?} files
     * @param {?} info
     * @return {?}
     */
    createFunction(files, info) {
        if (files.length === 0) {
            const /** @type {?} */ tempForm = new FormData();
            tempForm.append('content', info.content);
            return this._hmDefaultHttpClient.post(`api/Discuss/{postId}`, { postId: info.postId }, tempForm);
        }
        else {
            const /** @type {?} */ tempArray = [];
            for (let /** @type {?} */ i = 0; i < files.length; i++) {
                tempArray.push(files[i].file);
            }
            return this._upload.upload({
                url: `api/Discuss/${info.postId}`,
                fields: info,
                files: tempArray,
                process: true,
                headers: new HttpHeaders().set('authorization', `Bearer ${sessionStorage.getItem('token')}`)
            });
        }
    }
}
DbPostService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DbPostService.ctorParameters = () => [
    { type: HmDefaultHttpClient, },
    { type: NgxfUploaderService, },
    { type: BlockViewService, },
];
function DbPostService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DbPostService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DbPostService.ctorParameters;
    /** @type {?} */
    DbPostService.prototype._hmDefaultHttpClient;
    /** @type {?} */
    DbPostService.prototype._upload;
    /** @type {?} */
    DbPostService.prototype._blockViewService;
}
//# sourceMappingURL=db-post.service.js.map