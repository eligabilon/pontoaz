import {NbMenuItem} from '@nebular/theme';

export const MENU_ITENS_PUBLICOS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'ion-home',
    link: '/pages/home',
    home: true,
  }, {
    title: 'ACESSO',
    group: true,
  }, {
    title: 'Login',
    icon: 'fa fa-sign-in',
    link: '/auth/login',
    home: true,
  }, {
    title: 'Cadastrar-se',
    icon: 'ion-person-add',
    link: '/auth/register',
    home: true,
  }
];

export const MENU_ITENS_RESTRITO: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'ion-home',
    link: '/pages/home',
    home: true,
  }, {
    title: 'Impressão de Justificativa',
    icon: 'ion-printer',
    link: '/pages/emissao-justificativa/0'
  }, {
    title: 'ACESSO',
    group: true,
  }, {
    title: 'Logout',
    icon: 'fa fa-sign-out',
    link: '/auth/logout',
    home: true,
  }
];

export const MENU_ITENS_CONTRIBUIDOR: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'ion-home',
    link: '/pages/dashboard',
    home: true,
  }, {
    title: 'Home',
    icon: 'ion-home',
    link: '/pages/home',
    home: true,
  }, {
    title: 'Impressão de Justificativa',
    icon: 'ion-printer',
    link: '/pages/emissao-justificativa/0'
  }, {
    title: 'ACESSO',
    group: true,
  }, {
    title: 'Logout',
    icon: 'fa fa-sign-out',
    link: '/auth/logout',
    home: true,
  }
];
