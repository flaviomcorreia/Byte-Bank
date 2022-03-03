import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output() valoresComErro = new EventEmitter<string>();

  title = 'byte_bank';

  constructor(private service: TransferenciaService){}

  transferir($event:  any){
    this.service.adicionarTransferencia($event)
  }
}
