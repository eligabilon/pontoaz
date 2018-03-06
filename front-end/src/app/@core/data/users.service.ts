import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Usuario} from './usuario';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

const STORAGE_KEY_USER = 'user-logado';

@Injectable()
export class UserService {

  private URL_USUARIO = environment.backendUrl + 'usuario/';

  usuario: Usuario;

  constructor(private httpClient: HttpClient) {
  }

  getUser(): Observable<any> {
    return Observable.of(this.getUsuarioLogado());
  }

  getUsers(): Observable<any> {
    return this.httpClient.get(this.URL_USUARIO);
  }

  getUsersContribuidores(): Observable<any> {
    return this.httpClient.get(this.URL_USUARIO + 'contribuidores');
  }

  getUsuarioPorID(id: number): Observable<any> {
    return this.httpClient.get(this.URL_USUARIO + id);
  }

  addUsuarioLogado(usuario: Usuario) {
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(usuario));
  }

  getUsuarioLogado(): Usuario {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_USER));
  }

  removerUsuarioLogado() {
    localStorage.removeItem(STORAGE_KEY_USER);
  }

}
