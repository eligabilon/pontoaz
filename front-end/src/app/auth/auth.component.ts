import {Component} from '@angular/core';
import {MenuService} from "../@core/data/menu.service";
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'ngx-auth',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]='menu'></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class AuthComponent {

  menu: NbMenuItem[] = this.menuService.MENU_ITENS_PUBLICOS;

  constructor(private menuService: MenuService) {
    this.menuService.changeMenu.subscribe(menuAtual => {
      this.menu = menuAtual;
    });
  }

}
