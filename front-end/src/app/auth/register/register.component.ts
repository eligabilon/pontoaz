import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {ToasterConfig, ToasterService} from 'angular2-toaster';

import {ThemeToasterService} from '../../@theme/services/theme-toaster.service';
import {Usuario} from '../../@core/data/usuario';

@Component({
  selector: 'ngx-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: Usuario;
  config: ToasterConfig;

  constructor(protected service: AuthService, protected router: Router,
              private toasterService: ToasterService,
              private themeToasterService: ThemeToasterService) {
  }

  ngOnInit() {
    this.user = new Usuario();
    this.config = this.themeToasterService.getToasteConfig();
    this.submitted = false;
  }

  register(): void {
    this.errors = this.messages = [];
    this.user.picture = 'assets/images/face-00.png';
    this.formatarPis();
    this.service.register(this.user).subscribe(p => {
      if (p.error) {
        this.toasterService.popAsync('error', p.data.msg, 'Tente novamente!');
      } else {
        this.service.addUsuarioLogado(p.data.usuario);
        this.toasterService.popAsync('sucess', p.data.msg, '');
        this.submitted = false;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);

      }
    }, err => {
      this.toasterService.popAsync('error', err.data.msg, 'Tente novamente Erro!');
    });
  }

  formatarPis() {
    if (this.user.pis[0] === '0') {
      this.user.pis = this.user.pis.slice(1, this.user.pis.length);
    }
  }


}
