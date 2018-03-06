import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {Mensagem} from './mensagem';

@Injectable()
export class ContatoService {

  private URL_MENSAGENS = environment.backendUrl + 'mensagens/';

  constructor(private httpClient: HttpClient) {
  }

  getMensagensBoas(): Observable<any> {
    return this.httpClient.get(this.URL_MENSAGENS + 'boas');
  }

  getMensagensRuins(): Observable<any> {
    return this.httpClient.get(this.URL_MENSAGENS + 'ruins');
  }

  enviarMensagem(mensagem: Mensagem): Observable<any> {
    return this.httpClient.post(this.URL_MENSAGENS, mensagem);
  }

}
