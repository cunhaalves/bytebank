import { Component, Output, EventEmitter } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
import { TranferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TranferenciaService) {

  }

  transferir() {

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir)
      .subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
      }, error => {
        return console.error(error);
      });
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
