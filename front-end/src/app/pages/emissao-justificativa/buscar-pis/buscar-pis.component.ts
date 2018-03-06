import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmissaoJustificativaService} from '../emissao-justificativa.service';
import {ToasterConfig, ToasterService} from 'angular2-toaster';

import {ThemeToasterService} from '../../../@theme/services/theme-toaster.service';

import 'style-loader!angular2-toaster/toaster.css';
import {Usuario} from '../../../@core/data/usuario';
import {UserService} from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-buscar-pis',
  templateUrl: './buscar-pis.component.html',
  styleUrls: ['./buscar-pis.component.scss'],
})
export class BuscarPisComponent implements OnInit {

  config: ToasterConfig;

  busca: string;

  usuarios: Usuario[];

  constructor(private router: Router,
              private emissaoJustificativaService: EmissaoJustificativaService,
              private toasterService: ToasterService,
              private themeToasterService: ThemeToasterService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.config = this.themeToasterService.getToasteConfig();
    this.userService.getUsers().subscribe(p => {
      if (!p.error) {
        this.usuarios = p.data;
      }
    }, err => {
      console.log(err);
      this.toasterService.popAsync('error', err.data.msg, 'Tente novamente Erro!');
    });
    const usuario: Usuario = this.userService.getUsuarioLogado();
    if (usuario) {
      this.busca = usuario.pis;
    }
  }

  buscarInformacoes() {
    let usuarioEncontrado: Usuario;
    for (const user of this.usuarios) {
      if (this.busca === user.email || this.busca === user.cpf || this.busca === user.pis) {
        usuarioEncontrado = user;
        break;
      }
    }
    if (usuarioEncontrado) {
      this.router.navigate(['/pages/emissao-justificativa', usuarioEncontrado.id]);
    } else {
      this.toasterService.popAsync('error', 'Suas informações não foram encontradas!', 'Digite um Email, CPF ou PIS valido.');
    }
  }

}
