import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';
import {EmissaoJustificativaModule} from '../emissao-justificativa/emissao-justificativa.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    ThemeModule,
    EmissaoJustificativaModule,
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule {
}
