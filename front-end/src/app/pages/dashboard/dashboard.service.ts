import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class DashboardService {

  private URL_IMPRESSAO = environment.backendUrl + 'impressao/';
  private URL_DASHBOARD = environment.backendUrl + 'dashboard/';

  constructor(private httpClient: HttpClient) {
  }

  getInformacoesUsuariosImpressao(): Observable<any> {
    return this.httpClient.get(this.URL_IMPRESSAO + 'informacoes-usuarios');
  }

  getInfoDashboard(): Observable<any> {
    return this.httpClient.get(this.URL_DASHBOARD + 'info');
  }

}
