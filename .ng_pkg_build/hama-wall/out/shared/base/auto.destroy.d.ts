import { Subject } from 'rxjs/Subject';
import { OnDestroy } from '@angular/core';
export declare abstract class AutoDestroy implements OnDestroy {
    protected _destroy$: Subject<any>;
    ngOnDestroy(): void;
}
