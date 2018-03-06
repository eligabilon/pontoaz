import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {ContatoModule} from '../contato/contato.module';
import {ImpressoesUsuariosComponent} from './impressoes-usuarios/impressoes-usuarios.component';
import {DashboardService} from './dashboard.service';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    ContatoModule
  ],
  declarations: [
    DashboardComponent,
    ImpressoesUsuariosComponent,
  ],
  providers: [
    DashboardService,
  ],
})
export class DashboardModule { }
