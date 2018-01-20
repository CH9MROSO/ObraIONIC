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
    let body = 
      {
        'visita': {
          "obra_id": VisitaNueva.obra_id,
          "num_visita": VisitaNueva.num_visita,       
          "fecha": VisitaNueva.fecha,
          "fase": VisitaNueva.fase,
          "observaciones": VisitaNueva.observaciones,
          "elementos": VisitaNueva.elementos,   
          "estado_elementos": VisitaNueva.estado_elementos,
          "documentos": VisitaNueva.documentos,
          "estado_documentos": VisitaNueva.estado_documentos               
        }
      };
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
