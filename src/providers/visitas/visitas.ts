import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Api } from '../providers';
import { Visita } from './../../models/Visita';

@Injectable()
export class VisitasProvider {

  constructor(public api: Api) {
  }
  getAllVisitas(): Observable<any> {
    return this.api.get('visitas');
  }
  getAllVisitasObra(idObra: number): Observable<any> {
    return this.api.get('visitas/Obra/' + idObra);
  }
  createVisita(VisitaNueva: Visita): Observable<any> {
    let body = {'visita': VisitaNueva};
    return this.api.post('visitas/nueva', body);
  }
  getVisita(id: number): Observable<any> {
    return this.api.get('visitas/' + id);
  }
  updateVisita(id:number, visitaActualizada: Visita): Observable<any> {
    let body = {'visita': visitaActualizada};
    return this.api.put('visitas', id, body);
  }
  deleteVisita(id: number): Observable<any> {
    return this.api.delete('visitas/eliminar', id);
  }

}
