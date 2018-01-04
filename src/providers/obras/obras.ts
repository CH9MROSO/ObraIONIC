import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Api } from '../providers';
import { Obra } from '../../models/obra';

@Injectable()
export class ObrasProvider {

  constructor(public api: Api) {
  }
  getAllObras(): Observable<any> {
    return this.api.get('obras');
  }
  createObra(obraNueva: Obra): Observable<any> {
    let body = {'obra': obraNueva};
    return this.api.post('obras/nueva', body);
  }
  getObra(id: number): Observable<any> {
    return this.api.get('obras/' + id);
  }
  updateObra(id:number, obraActualizada: Obra): Observable<any> {
    let body = {'obra': obraActualizada};
    return this.api.put('obras', id, body);
  }
  deleteObra(id: number): Observable<any> {
    return this.api.delete('obras/eliminar', id);
  }
}
