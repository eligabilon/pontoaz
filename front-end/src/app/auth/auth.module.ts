import {NgModule} from '@angular/core';

import {ThemeModule} from '../@theme/theme.module';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthService} from './auth.service';
import {TermoDeUsoComponent} from './termo-de-uso/termo-de-uso.component';
import {ToasterModule} from 'angular2-toaster';
import {CoreModule} from '../@core/core.module';
import {LogoutComponent} from './logout/logout.component';
import {ProfileComponent} from './profile/profile.component';
import {NgxMaskModule} from 'ngx-mask';

const PAGES_COMPONENTS = [
  AuthComponent,
  LoginComponent,
  ProfileComponent,
  RegisterComponent,
  TermoDeUsoComponent,
  LogoutComponent,
];

@NgModule({
  imports: [
    AuthRoutingModule,
    ThemeModule,
    ToasterModule,
    CoreModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  exports: [
    ...PAGES_COMPONENTS,
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule {
}
