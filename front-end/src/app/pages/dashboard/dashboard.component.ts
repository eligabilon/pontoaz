import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./dashboard.service";

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  usuariosCadastrados: number;
  impressoes: number;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.getInfoDashboard().subscribe(p => {
      if (!p.error) {
        this.usuariosCadastrados = p.data.usuariosCadastrados;
        this.impressoes = p.data.impressoes;
      }
    }, err => {
      console.log(err);
    });
  }
}
