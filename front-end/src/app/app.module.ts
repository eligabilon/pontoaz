/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ToasterModule} from 'angular2-toaster';
import {AuthModule} from './auth/auth.module';
import {PagesModule} from './pages/pages.module';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToasterModule,
    AuthModule,
    PagesModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
})
export class AppModule {
}
