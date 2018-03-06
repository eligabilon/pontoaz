import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {ToasterConfig, ToasterService} from 'angular2-toaster';

import {ThemeToasterService} from '../../@theme/services/theme-toaster.service';
import {Usuario} from '../../@core/data/usuario';

@Component({
  selector: 'ngx-profile',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: Usuario;
  config: ToasterConfig;
  avatares: string[] = [];

  constructor(protected service: AuthService, protected router: Router,
              private toasterService: ToasterService,
              private themeToasterService: ThemeToasterService) {
  }

  ngOnInit() {
    this.user = this.service.getUsuarioLogado();
    if (!this.user) {
      this.user = new Usuario();
    }
    this.config = this.themeToasterService.getToasteConfig();
    this.submitted = false;
    this.avatares = ['assets/images/user-default.jpg', ''];
  }

  atualizarAvatar(): void {
    const randomIndex:number = this.getRandomInt(1, 18);
    let randomAvatar:string = '';
    if(randomIndex < 10 && randomIndex >= 0){
      randomAvatar = 'assets/images/face-0' + randomIndex + '.png';
    } else {
      randomAvatar = 'assets/images/face-' + randomIndex + '.png';
    }
    this.user.picture = randomAvatar;
  }

  atualizar(): void {
    this.errors = this.messages = [];
    this.service.atualizarUsuario(this.user).subscribe(p => {
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

  private getRandomInt(min, max): number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
