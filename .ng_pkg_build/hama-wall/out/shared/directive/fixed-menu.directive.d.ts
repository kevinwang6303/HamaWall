import { AutoDestroy } from '../base/auto.destroy';
import { OnInit, ElementRef } from '@angular/core';
import { EventService } from '../service/event.service';
export declare class FixedMenuDirective extends AutoDestroy implements OnInit {
    private _elem;
    private _EventService;
    appFixedMenu: string;
    howFixed: string;
    constructor(_elem: ElementRef, _EventService: EventService);
    ngOnInit(): void;
    private conditions();
}
