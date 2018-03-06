import {Component} from '@angular/core';

import {Router} from '@angular/router';
import {MenuService} from '../@core/data/menu.service';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]='menu'></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu: NbMenuItem[] = this.menuService.MENU_ITENS_PUBLICOS;

  constructor(protected router: Router, private menuService: MenuService) {
    this.menuService.changeMenu.subscribe(menuAtual => {
      this.menu = menuAtual;
    });
  }

}
