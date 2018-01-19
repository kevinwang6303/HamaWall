import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HmCarouselModule } from '@hamastar/hm-carousel';
import { HmDefaultHttpClient } from '@hamastar/http';
import { NgxfUploaderModule } from 'ngxf-uploader';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';
import { SharedModule } from '../../shared/shared.module';
import { ThemeModule } from '../../theme/theme.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostItemService } from './post-item/post-item.service';
import { WallItemComponent } from './wall-item/wall-item.component';
import { WallItemService } from './wall-item/wall-item.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    SharedModule,
    ThemeModule,
    FlexLayoutModule,
    NgxfUploaderModule,
    HmCarouselModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    WallItemComponent,
    PostItemComponent
  ],
  providers: [
    HmDefaultHttpClient,
    HomeService,
    PostItemService,
    WallItemService
  ]
})
export class HomeModule { }
