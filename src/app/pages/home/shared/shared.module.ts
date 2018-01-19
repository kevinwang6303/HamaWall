import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FixedMenuDirective
} from './directive';


import {
  EventService
} from './service';


import {
  SafePipe
} from './pipes';


const SHARE_DIRECTIVES = [
  FixedMenuDirective
];


const SHARE_PIPES = [
  SafePipe
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SHARE_DIRECTIVES,
    SHARE_PIPES
  ],
  exports: [
    SHARE_DIRECTIVES,
    SHARE_PIPES
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


