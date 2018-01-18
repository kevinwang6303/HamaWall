import { BlockViewModule } from '@hamastar/block-view';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  DbPostService
} from './db-service';


const THEME_DBSERVICE = [
  DbPostService
];

import {
  AgoTimePipe
} from './pipes';


const THEME_PIPES = [
  AgoTimePipe
];


@NgModule({
  imports: [
    CommonModule,
    BlockViewModule
  ],
  declarations: [
    THEME_PIPES
  ],
  exports: [
    THEME_PIPES
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        THEME_DBSERVICE
      ]
    };
  }
}
