import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Justificativa} from './justificativa';
import {environment} from '../../../environments/environment';

const STORAGE_KEY_JUSTIFICATIVA = 'justificativa';

@Injectable()
export class EmissaoJustificativaService {

  private URL_IMPRESSAO = environment.backendUrl + 'impressao';

  constructor(private httpClient: HttpClient) {
  }

  setJustificativa(justificativa: Justificativa) {
    localStorage.setItem(STORAGE_KEY_JUSTIFICATIVA, JSON.stringify(justificativa));
  }

  getJustificativa(): Justificativa {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_JUSTIFICATIVA));
  }

  imprimirJustificativaPonto(justificativa: Justificativa) {
    return this.httpClient.post(this.URL_IMPRESSAO, justificativa, {responseType: 'blob'});
  }

}
