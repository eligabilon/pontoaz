import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-logout',
  template: '<h1>Loading...</h1>',
})
export class LogoutComponent implements OnInit {

  constructor(protected service: AuthService, protected router: Router) {
  }

  ngOnInit(): void {
    this.service.logout();
    this.router.navigate(['../../home']);
  }
}
