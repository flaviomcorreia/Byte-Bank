import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output() valoresComErro = new EventEmitter<string>();

  title = 'byte_bank';
  destino = 0;
  valor = 0;
  transferencias: any[] = [];

  transferir($event:  any){
    console.log($event);
    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia);
  }
}
