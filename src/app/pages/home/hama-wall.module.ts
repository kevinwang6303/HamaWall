import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HmCarouselModule } from '@hamastar/hm-carousel';
import { HmDefaultHttpClient } from '@hamastar/http';
import { HmHttpModule } from '@hamastar/http';
import { NgxfUploaderModule } from 'ngxf-uploader';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostItemService } from './post-item/post-item.service';
import { HamaWallService } from './theme/db-service';
import { ThemeModule } from './theme/theme.module';
import { WallItemComponent } from './wall-item/wall-item.component';
import { WallItemService } from './wall-item/wall-item.service';
import { CommomMaterialModule } from '@hamastar/matpack';

const HAMAWALL_DBSERVICE = [
  HomeService,
  PostItemService,
  WallItemService,
  HamaWallService
];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommomMaterialModule,
    ThemeModule,
    FlexLayoutModule,
    NgxfUploaderModule.forRoot(),
    HmCarouselModule,
    HmHttpModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    WallItemComponent,
    PostItemComponent
  ],
  exports: [HomeComponent]
})

export class HamaWallModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: HamaWallModule,
      providers: [HAMAWALL_DBSERVICE]
    };
  }
}
