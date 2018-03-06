import {Component, Input, OnInit} from '@angular/core';

import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {UserService} from '../../../@core/data/users.service';
import {AnalyticsService} from '../../../@core/utils/analytics.service';
import {Usuario} from '../../../@core/data/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: Usuario;

  userMenu = [
    {title: 'Profile', url: '#/auth/profile', icon: 'fa fa-user-circle'},
    {title: 'Log out', url: '#/auth/logout', icon: 'fa fa-sign-out'},
  ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private router: Router) {
  }

  ngOnInit() {
    this.userService.getUser()
      .subscribe((user: any) => this.user = user);

    this.router.events.subscribe(e => {
      this.userService.getUser()
        .subscribe((user: any) => this.user = user);
    });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
