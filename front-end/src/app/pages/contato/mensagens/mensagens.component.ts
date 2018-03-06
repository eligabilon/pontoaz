import {Component, OnInit} from '@angular/core';
import {Mensagem} from '../mensagem';
import {ContatoService} from '../contato.service';

@Component({
  selector: 'ngx-mensagens',
  styleUrls: ['./mensagens.component.scss'],
  templateUrl: './mensagens.component.html',
})
export class MensagensComponent implements OnInit {

  mensagensBoas: Mensagem[];
  mensagensRuins: Mensagem[];

  constructor(private contatoService: ContatoService) {
  }

  ngOnInit() {

    this.contatoService.getMensagensBoas().subscribe(p => {
      if (!p.error) {
        this.mensagensBoas = p.data;
      }
    }, err => {
      console.log(err);
    });
    this.contatoService.getMensagensRuins().subscribe(p => {
      if (!p.error) {
        this.mensagensRuins = p.data;
      }
    }, err => {
      console.log(err);
    });
  }

}
