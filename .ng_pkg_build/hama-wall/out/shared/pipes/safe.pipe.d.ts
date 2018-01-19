import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';
export declare class SafePipe implements PipeTransform {
    private _sanitizer;
    constructor(_sanitizer: DomSanitizer);
    transform(value: string, type?: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl;
}
