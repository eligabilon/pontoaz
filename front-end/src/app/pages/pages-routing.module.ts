import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmissaoJustificativaComponent} from './emissao-justificativa/emissao-justificativa.component';
import {HomeComponent} from './home/home.component';
import {ContatoComponent} from './contato/contato.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    pathMatch: 'prefix',
    children: [{
      path: '',
      component: HomeComponent,
    }, {
      path: 'home',
      component: HomeComponent,
    }, {
      path: 'dashboard',
      component: DashboardComponent,
    }, {
      path: 'emissao-justificativa/:idUser',
      component: EmissaoJustificativaComponent,
    }, {
      path: 'contato',
      component: ContatoComponent,
    }],
  },
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
