import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FixedMenuDirective
} from './directive';


import {
  EventService
} from './service';


import {
  DbPostService
} from './db-service';

const SHARE_DIRECTIVES = [
  FixedMenuDirective
];

const DBSERVICE = [
  DbPostService
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SHARE_DIRECTIVES
  ],
  exports: [
    SHARE_DIRECTIVES
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [
        EventService,
        DBSERVICE
      ]
    };
  }
}


