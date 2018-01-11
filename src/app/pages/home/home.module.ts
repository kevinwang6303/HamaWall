import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WallItemComponent } from './wall-item/wall-item.component';
import { PostItemComponent } from './post-item/post-item.component';
import { HmDefaultHttpClient } from '@hamastar/http';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    WallItemComponent,
    PostItemComponent
  ],
  providers: [
    HmDefaultHttpClient,
    HomeService
  ]
})
export class HomeModule { }
