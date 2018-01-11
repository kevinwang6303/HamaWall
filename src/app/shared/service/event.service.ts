import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/throw';

@Injectable()
export class EventService {
  public scrollEvent = Observable.fromEvent(document, 'scroll');
  public mouseMove = Observable.fromEvent(document, 'mousemove');
  public touchMove = Observable.fromEvent(document, 'touchmove');
  public keydownEvent_Exit = Observable.fromEvent(
    document,
    'keydown'
  ).filter((event: KeyboardEvent) => {
    return event.keyCode === 27;
  });

  constructor() {}
}
