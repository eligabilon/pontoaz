import { Component, OnInit } from '@angular/core';

import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'ngx-impressoes-usuarios',
  styleUrls: ['./impressoes-usuarios.component.scss'],
  templateUrl: './impressoes-usuarios.component.html',
})
export class ImpressoesUsuariosComponent implements OnInit {

  recentes: any[];
  porUsuarios: any[];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.getInformacoesUsuariosImpressao().subscribe(p => {
      if (!p.error) {
        console.log(p.data);
        this.recentes = p.data.ultimasImpressoes;
        this.porUsuarios = p.data.impressoesPorUsuario;
      }
    }, err => {
      console.log(err);
    });
  }
}
