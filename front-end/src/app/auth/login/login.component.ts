import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {ToasterConfig, ToasterService} from 'angular2-toaster';
import {ThemeToasterService} from '../../@theme/services/theme-toaster.service';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean;
  config: ToasterConfig;

  constructor(protected service: AuthService,
              protected router: Router,
              private toasterService: ToasterService,
              private themeToasterService: ThemeToasterService) {
  }

  ngOnInit(): void {
    this.errors = [];
    this.config = this.themeToasterService.getToasteConfig();
    this.submitted = false;
  }

  login(): void {
    this.errors = this.messages = [];
    this.submitted = false;
    this.service.login(this.user.email, this.user.password).subscribe(p => {
      if (p.error) {
        this.toasterService.popAsync('error', p.data.msg, 'Tente novamente!');
      } else {
        this.service.addUsuarioLogado(p.data.usuario);
        this.toasterService.popAsync('sucess', p.data.msg, '');
        this.submitted = true;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      }
    }, err => {
      this.toasterService.popAsync('error', err.data.msg, 'Tente novamente Erro!');
    });
  }
}
