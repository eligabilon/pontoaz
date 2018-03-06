/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from './@core/utils/analytics.service';
import {ToasterConfig} from 'angular2-toaster';
import {ThemeToasterService} from './@theme/services/theme-toaster.service';

import 'style-loader!angular2-toaster/toaster.css';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'ngx-app',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  config: ToasterConfig;

  constructor(private analytics: AnalyticsService,
              private themeToasterService: ThemeToasterService,
              protected router: Router,
              private location: Location) {
  }

  ngOnInit(): void {
    this.config = this.themeToasterService.getToasteConfig();
    this.analytics.trackPageViews();
  }
}
