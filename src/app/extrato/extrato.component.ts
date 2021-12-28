import { Component, Input, OnInit } from '@angular/core';
import { TranferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.models';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] = [];

  constructor(private service: TranferenciaService) { }

  ngOnInit(): void {

    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })

    this.transferencias = this.service.transferencias;
  }

}
