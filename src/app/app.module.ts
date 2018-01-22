import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockViewModule } from '@hamastar/block-view';
import { HmCarouselModule } from '@hamastar/hm-carousel';
import { HmDefaultHttpClient } from '@hamastar/http';
import { NgxfUploaderModule } from 'ngxf-uploader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedMaterialModule } from './pages/home/shared-material/shared-material.module';
import { SharedModule } from './pages/home/shared/shared.module';
import { ThemeModule } from './pages/home/theme/theme.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedMaterialModule,
    SharedModule.forRoot(),
    BlockViewModule.forRoot(),
    ThemeModule.forRoot(),
    NgxfUploaderModule.forRoot(),
    HmCarouselModule
  ],
  providers: [HmDefaultHttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
