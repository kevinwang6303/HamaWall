import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FixedMenuDirective
} from './directive';


import {
  EventService
} from './service';

const SHARE_DIRECTIVES = [
  FixedMenuDirective
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
        EventService
      ]
    };
  }
}


