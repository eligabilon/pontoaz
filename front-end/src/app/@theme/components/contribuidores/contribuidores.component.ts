import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from "../../../@core/data/users.service";
import {Usuario} from "../../../@core/data/usuario";

@Component({
  selector: 'ngx-contribuidores',
  styleUrls: ['./contribuidores.component.scss'],
  templateUrl: './contribuidores.component.html',
})
export class ContribuidoresComponent implements OnInit {

  contribuidores: Usuario[];

  constructor(private activeModal: NgbActiveModal, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsersContribuidores().subscribe(p => {
      if (!p.error) {
        console.log(p.data);
        this.contribuidores = p.data;
      }
    }, err => {
      console.log(err);
    });
  }

  closeModal() {
    this.activeModal.close();
  }
}
