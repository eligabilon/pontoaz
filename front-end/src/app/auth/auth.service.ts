import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../@core/data/users.service';
import {Usuario} from '../@core/data/usuario';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

  private URL = environment.backendUrl +  'auth/';

  constructor(private httpClient: HttpClient, private userService: UserService) {
  }

  register(usuario: Usuario): Observable<any> {
    return this.httpClient.post(this.URL + 'register', usuario);
  }

  login(email: string, senha: string): Observable<any> {
    const parametro = {
      email: email,
      senha: senha,
    };
    return this.httpClient.post(this.URL + 'login', parametro);
  }

  atualizarUsuario(usuario: Usuario): Observable<any> {
    console.log(usuario);
    return this.httpClient.put(this.URL + 'update/' + usuario.id, usuario);
  }

  logout() {
    this.userService.removerUsuarioLogado();
  }

  addUsuarioLogado(usuario: Usuario) {
    this.userService.addUsuarioLogado(usuario);
  }

  getUsuarioLogado(): Usuario {
    return this.userService.getUsuarioLogado();
  }

  usuarioLogado(): boolean {
    return !!this.userService.getUsuarioLogado();
  }

}
