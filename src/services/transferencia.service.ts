import { Transferencia } from './models/transferencia.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }
  adicionarTransferencia(transferencia: any): Observable<Transferencia> {
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  hidratar(transferencia: any){
    transferencia.data = new Date();
    this.listaTransferencia.push(transferencia)
  }
}
