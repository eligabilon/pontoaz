import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ContribuidoresComponent} from '../contribuidores/contribuidores.component';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  private version: string;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  showContribuidoresModal() {
    this.modalService.open(ContribuidoresComponent, { size: 'lg', container: 'nb-layout' });
  }
}
