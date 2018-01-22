import { Pipe, PipeTransform } from '@angular/core';

import * as momentImported from 'moment';
const moment = momentImported;
@Pipe({
  name: 'agoTime'
})
export class AgoTimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return moment(value)
      .locale('zh-tw')
      .startOf('hour')
      .fromNow();
  }
}
