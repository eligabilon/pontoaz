import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../@core/data/usuario";
import {Router} from "@angular/router";
import {ThemeToasterService} from "../../@theme/services/theme-toaster.service";
import {ToasterService} from "angular2-toaster";
import {AuthService} from "../../auth/auth.service";
import {ContatoService} from "./contato.service";
import {Mensagem} from "./mensagem";
import {UserService} from "../../@core/data/users.service";

@Component({
  selector: 'ngx-contato',
  styleUrls: ['./contato.component.scss'],
  templateUrl: './contato.component.html',
})
export class ContatoComponent implements OnInit {

  user:Usuario;
  mensagem: Mensagem;
  submitted = false;

  constructor(protected contatoService: ContatoService,
              protected router: Router,
              private toasterService: ToasterService,
              private themeToasterService: ThemeToasterService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.mensagem = new Mensagem();
    this.user = this.userService.getUsuarioLogado();
  }

  enviar(): void {
    this.submitted = true;
    this.mensagem.idUsuario = this.user.id;
    this.contatoService.enviarMensagem(this.mensagem).subscribe(p => {
      if (p.error) {
        this.toasterService.popAsync('error', p.data.msg, 'Tente novamente!');
      } else {
        this.toasterService.popAsync('sucess', p.data.msg, '');
        this.submitted = false;
      }
    }, err => {
      this.toasterService.popAsync('error', err.data.msg, 'Tente novamente Erro!');
    });
  }
}
