import { Component, Output, EventEmitter} from '@angular/core';


@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor = 0;
  destino = 0;

  transferir(){
    console.log('Solicitada Nova Transeferência')
    //Pega os valores a emitir e os exibe em uma janela...
    this.aoTransferir.emit({valor: this.valor, destino: this.destino});
    this.limparCampo();
  }
  limparCampo(){
    this.valor = 0;
    this.destino = 0;
  }
}
