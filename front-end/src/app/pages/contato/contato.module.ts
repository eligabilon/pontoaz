import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';
import {ContatoComponent} from './contato.component';
import {EmissaoJustificativaModule} from '../emissao-justificativa/emissao-justificativa.module';
import {MensagensComponent} from './mensagens/mensagens.component';
import {ContatoService} from './contato.service';

@NgModule({
  imports: [
    ThemeModule,
    EmissaoJustificativaModule,
  ],
  declarations: [
    ContatoComponent,
    MensagensComponent
  ],
  exports: [
    ContatoComponent,
    MensagensComponent
  ],
  providers: [
    ContatoService,
  ],
})
export class ContatoModule {
}
