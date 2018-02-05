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
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { SharedModule } from './shared/shared.module';
import { HamaWallService } from './theme/db-service';
import { ThemeModule } from './theme/theme.module';
import { WallItemComponent } from './wall-item/wall-item.component';
import { WallItemService } from './wall-item/wall-item.service';
import { BlockViewModule } from '@hamastar/block-view';

const HAMAWALL_DBSERVICE = [
  HmDefaultHttpClient,
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
    SharedMaterialModule,
    SharedModule.forRoot(),
    ThemeModule,
    FlexLayoutModule,
    NgxfUploaderModule.forRoot(),
    HmCarouselModule,
    BlockViewModule.forRoot(),
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
