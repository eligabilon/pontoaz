import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';
import {EmissaoJustificativaModule} from './emissao-justificativa/emissao-justificativa.module';
import {AuthModule} from '../auth/auth.module';
import {CoreModule} from '../@core/core.module';
import {HomeModule} from './home/home.module';
import {ContatoModule} from './contato/contato.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    HomeModule,
    DashboardModule,
    EmissaoJustificativaModule,
    ContatoModule,
    AuthModule,
    CoreModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
