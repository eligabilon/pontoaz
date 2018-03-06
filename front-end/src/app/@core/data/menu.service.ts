import {EventEmitter, Injectable, Output} from '@angular/core';
import 'rxjs/add/observable/of';
import {Usuario} from './usuario';
import {NbMenuItem} from '@nebular/theme';
import {Router} from '@angular/router';
import {UserService} from './users.service';

const MENU_ATUAL = 'menu_atual';
const ITENS_PUBLICOS = 'menu_itens_publicos';
const ITENS_RESTRITO = 'menu_itens_restrito';
const ITENS_CONTRIBUIDOR = 'menu_itens_contribuidor';

@Injectable()
export class MenuService {

  @Output()
  changeMenu: EventEmitter<NbMenuItem[]> = new EventEmitter<NbMenuItem[]>();

  MENU_ITENS_PUBLICOS: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'ion-home',
      link: '/pages/home',
    }, {
      title: 'ACESSO',
      group: true,
    }, {
      title: 'Login',
      icon: 'fa fa-sign-in',
      link: '/auth/login',
    }, {
      title: 'Cadastrar-se',
      icon: 'ion-person-add',
      link: '/auth/register',
    }
  ];

  MENU_ITENS_RESTRITO: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'ion-home',
      link: '/pages/home',
    }, {
      title: 'Impressão de Justificativa',
      icon: 'ion-printer',
      link: '/pages/emissao-justificativa/0'
    }, {
      title: 'Contato',
      icon: 'ion-chatbox',
      link: '/pages/contato'
    }, {
      title: 'ACESSO',
      group: true,
    }, {
      title: 'Logout',
      icon: 'fa fa-sign-out',
      link: '/auth/logout'
    }
  ];

  MENU_ITENS_CONTRIBUIDOR: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'ion-grid',
      link: '/pages/dashboard',
    }, {
      title: 'Home',
      icon: 'ion-home',
      link: '/pages/home',
    }, {
      title: 'Impressão de Justificativa',
      icon: 'ion-printer',
      link: '/pages/emissao-justificativa/0'
    }, {
      title: 'Contato',
      icon: 'ion-chatbox',
      link: '/pages/contato'
    }, {
      title: 'ACESSO',
      group: true,
    }, {
      title: 'Logout',
      icon: 'fa fa-sign-out',
      link: '/auth/logout',
    }
  ];

  constructor(protected userService: UserService, protected router: Router) {
    this.router.events.subscribe(e => {
      const usuario: Usuario = this.userService.getUsuarioLogado();
      if (usuario && usuario.funcao) {
        this.setMenu(ITENS_CONTRIBUIDOR);
      } else if (usuario) {
        this.setMenu(ITENS_RESTRITO);
      } else {
        this.setMenu(ITENS_PUBLICOS);
      }
      this.changeMenu.emit(this.getMenu());
    });
  }

  setMenu(menu) {
    localStorage.setItem(MENU_ATUAL, JSON.stringify(menu));
  }

  getMenu(): NbMenuItem[] {
    const menuAtual = JSON.parse(localStorage.getItem(MENU_ATUAL));
    switch (menuAtual) {
      case ITENS_CONTRIBUIDOR:
        return this.MENU_ITENS_CONTRIBUIDOR;
      case ITENS_RESTRITO:
        return this.MENU_ITENS_RESTRITO;
      case ITENS_PUBLICOS:
        return this.MENU_ITENS_PUBLICOS;
      default:
        return this.MENU_ITENS_PUBLICOS;
    }
  }


}
