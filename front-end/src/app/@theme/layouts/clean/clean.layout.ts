import {Component} from '@angular/core';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'ngx-clean-layout',
  styleUrls: ['./clean.layout.scss'],
  template: `
    <nb-layout>
      <nb-layout-column class='main-content'>
        <ng-content select='router-outlet'></ng-content>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class CleanLayoutComponent {
}
