import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Api } from '../providers';
import { Cliente } from '../../models/cliente';

@Injectable()
export class ClientesProvider {

  constructor(public api: Api) {
  }
  getAllClientes(): Observable<any> {
    return this.api.get('clientes');
  }
  getAllClientesObra(idObra: number): Observable<any> {
    return this.api.get('clientes/Obra/' + idObra);
  }
  createCliente(clienteNuevo: Cliente): Observable<any> {
    let body = {'cliente': clienteNuevo};
    return this.api.post('clientes/nuevo', body);
  }
  getCliente(id: number): Observable<any> {
    return this.api.get('clientes/' + id);
  }
  updateCliente(id:number, clienteActualizado: Cliente): Observable<any> {
    let body = {'cliente': clienteActualizado};
    return this.api.put('clientes', id, body);
  }
  deleteCliente(id: number): Observable<any> {
    return this.api.delete('clientes/eliminar', id);
  }
}
