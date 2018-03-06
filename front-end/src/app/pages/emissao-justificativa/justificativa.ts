import {Usuario} from '../../@core/data/usuario';
import {JustificativaDia} from './justificativaDia';

export class Justificativa {
  public usuario: Usuario;
  public justificativas: JustificativaDia[];
}
