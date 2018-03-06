import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';
import {EmissaoJustificativaComponent} from './emissao-justificativa.component';
import { BuscarPisComponent } from './buscar-pis/buscar-pis.component';
import {FormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {HttpClientModule} from '@angular/common/http';
import {EmissaoJustificativaService} from './emissao-justificativa.service';
import {ToasterModule} from 'angular2-toaster';
import {CoreModule} from '../../@core/core.module';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    Ng2SmartTableModule,
    HttpClientModule,
    ToasterModule,
    CoreModule,
  ],
  declarations: [
    EmissaoJustificativaComponent,
    BuscarPisComponent,
  ],
  exports: [
    EmissaoJustificativaComponent,
    BuscarPisComponent,
  ],
  providers: [
    EmissaoJustificativaService,
  ],
})
export class EmissaoJustificativaModule {
}
