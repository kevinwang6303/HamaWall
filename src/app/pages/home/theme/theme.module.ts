import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamaWallService } from './db-service';

const THEME_DBSERVICE = [HamaWallService];

import { AgoTimePipe } from './pipes';

const THEME_PIPES = [AgoTimePipe];

@NgModule({
  imports: [CommonModule],
  declarations: [THEME_PIPES],
  exports: [THEME_PIPES]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [THEME_DBSERVICE]
    };
  }
}
