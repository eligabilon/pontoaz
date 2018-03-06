import {Component, OnInit} from '@angular/core';
import {JustificativaDia} from './justificativaDia';
import {ActivatedRoute, Router} from '@angular/router';
import {ToasterConfig, ToasterService} from 'angular2-toaster';
import { saveAs } from 'file-saver/FileSaver';
import {ThemeToasterService} from '../../@theme/services/theme-toaster.service';
import {EmissaoJustificativaService} from './emissao-justificativa.service';
import {Usuario} from '../../@core/data/usuario';
import {Justificativa} from './justificativa';
import {UserService} from '../../@core/data/users.service';

@Component({
  selector: 'ngx-emissao-justificativa',
  styleUrls: ['./emissao-justificativa.component.scss'],
  templateUrl: './emissao-justificativa.component.html',
})
export class EmissaoJustificativaComponent implements OnInit {

  entradaCheck: boolean;
  saidaAlmocoCheck: boolean;
  retornoAlmocoCheck: boolean;
  saidaCheck: boolean;
  dataCheck: boolean;
  justificativaCheck: boolean;
  config: ToasterConfig;
  idUser: number;
  usuario: Usuario;
  justificativaDia: JustificativaDia;
  justificativas: JustificativaDia[];
  justificativa: Justificativa;

  constructor(private router: Router,
              private emissaoJustificativaService: EmissaoJustificativaService,
              private toasterService: ToasterService,
              private themeToasterService: ThemeToasterService,
              private route: ActivatedRoute,
              private userService: UserService) {

  }

  ngOnInit() {
    this.config = this.themeToasterService.getToasteConfig();
    this.justificativaDia = new JustificativaDia();
    this.justificativas = [];
    this.usuario = new Usuario();
    const usuarioLogado = this.userService.getUsuarioLogado();
    if (usuarioLogado) {
      this.usuario = usuarioLogado;
    } else {
      this.route.params.subscribe(params => {
        if (params.idUser) {
          this.idUser = params.idUser;
        }
        this.userService.getUsuarioPorID(this.idUser).subscribe(p => {
          if (p.error) {
            this.toasterService.popAsync('error', p.data.msg);
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 3000);
          } else {
            this.usuario = p.data;
          }
        }, err => {
          this.toasterService.popAsync('error', err.data.msg, 'Tente novamente Erro!');
        });
      });
    }
  }

  adicionar() {
    console.log(this.justificativaDia);
    this.justificativaDia.data = new Date(this.justificativaDia.dataTela.year,
                                          this.justificativaDia.dataTela.month - 1,
                                          this.justificativaDia.dataTela.day);
    this.justificativas.push(this.justificativaDia);
    this.limpar();
  }

  limpar() {
    this.justificativaDia = new JustificativaDia();
    this.entradaCheck = false;
    this.saidaAlmocoCheck = false;
    this.retornoAlmocoCheck = false;
    this.saidaCheck = false;
    this.justificativaCheck = false;
  }

  checkHorario(local: string) {
    if (local === 'entrada' && this.entradaCheck) {
      this.justificativaDia.entrada = '08:00'
    } else if (local === 'saidaAlmoco' && this.saidaAlmocoCheck) {
      this.justificativaDia.saidaAlmoco = '12:00'
    } else if (local === 'retornoAlmoco' && this.retornoAlmocoCheck) {
      this.justificativaDia.retornoAlmoco = '13:00'
    } else if (local === 'saida' && this.saidaCheck) {
      this.justificativaDia.saida = '17:48'
    } else if (local === 'data' && this.dataCheck) {
      this.justificativaDia.data = new Date();
    } else if (local === 'justificativa' && this.justificativaCheck) {
      this.justificativaDia.justificativa = 'Ponto não Registrado.';
    }
  }

  editarItem(item: JustificativaDia) {
    this.justificativaDia = item;
    this.excluirItem(this.justificativaDia);
  }

  excluirItem(item: JustificativaDia) {
    this.justificativas.splice(this.justificativas.indexOf(item), 1);
  }

  imprimir() {
    const justificativa = new Justificativa();
    justificativa.usuario = this.usuario;
    justificativa.justificativas = this.justificativas;
    this.emissaoJustificativaService.imprimirJustificativaPonto(justificativa).subscribe(response => saveAs(response, 'justificativa.pdf'));
  }
}
