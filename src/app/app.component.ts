import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byte_bank';
  destino = 0;
  valor = 0;
  transferencia: any;

  transferir($event:  any){
    console.log($event)
    this.transferencia = $event
  }
}
