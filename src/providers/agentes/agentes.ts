import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Api } from '../providers';
import { Cliente } from '../../models/cliente';
import { Promotor } from '../../models/promotor';
import { Constructor } from '../../models/construtor';
import { Tecnico } from '../../models/tecnico';
import { Subcontratista } from '../../models/subcontratista';

@Injectable()
export class AgentesProvider {

  constructor(public api: Api) {
  }
  // Servicios Clientes
  getAllClientes(): Observable<any> {
    return this.api.get('clientes');
  }
  getAllClientesObra(idObra: number): Observable<any> {
    return this.api.get('clientes/Obra/' + idObra);
  }
  createCliente(clienteNuevo: Cliente, contacto_id:number, obra_id: number): Observable<any> {
    let body = 
      {
        'cliente': {
          "contacto_id": contacto_id,
          "obra_id": obra_id,
          "intervencion": clienteNuevo.intervencion        
        }
      };
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
  // Servicios Promotores
  getAllPromotores(): Observable<any> {
    return this.api.get('promotores');
  }
  getAllPromotoresObra(idObra: number): Observable<any> {
    return this.api.get('promotores/Obra/' + idObra);
  }
  createPromotor(promotorNuevo: Promotor, contacto_id:number, obra_id: number): Observable<any> {
    let body = {'promotor': {
      "contacto_id": contacto_id,
      "obra_id": obra_id,
      "intervencion": promotorNuevo.intervencion        
    }
  };
    return this.api.post('promotores/nuevo', body);
  }
  getPromotor(id: number): Observable<any> {
    return this.api.get('promotores/' + id);
  }
  updatePromotor(id:number, promotorActualizado: Promotor): Observable<any> {
    let body = {'promotor': promotorActualizado};
    return this.api.put('promotores', id, body);
  }
  deletePromotor(id: number): Observable<any> {
    return this.api.delete('promotores/eliminar', id);
  }
  // Servicios Constructores
  getAllConstructores(): Observable<any> {
    return this.api.get('constructores');
  }
  getAllConstructoresObra(idObra: number): Observable<any> {
    return this.api.get('constructores/Obra/' + idObra);
  }
  createConstructor(constructorNuevo: Constructor, contacto_id:number, obra_id: number): Observable<any> {
    let body = {'constructor': {
      "contacto_id": contacto_id,
      "obra_id": obra_id,
      "intervencion": constructorNuevo.intervencion        
    }
  };
    return this.api.post('constructores/nuevo', body);
  }
  getConstructor(id: number): Observable<any> {
    return this.api.get('constructores/' + id);
  }
  updateConstructor(id:number, constructorActualizado: Constructor): Observable<any> {
    let body = {'constructor': constructorActualizado};
    return this.api.put('constructores', id, body);
  }
  deleteConstructor(id: number): Observable<any> {
    return this.api.delete('constructores/eliminar', id);
  }
  // Servicios Tecnicos
  getAllTecnicos(): Observable<any> {
    return this.api.get('tecnicos');
  }
  getAllTecnicosObra(idObra: number): Observable<any> {
    return this.api.get('tecnicos/Obra/' + idObra);
  }
  createTecnico(tecnicoNuevo: Tecnico, contacto_id:number, obra_id: number): Observable<any> {
    let body = {'tecnico': {
      "contacto_id": contacto_id,
      "obra_id": obra_id,
      "intervencion": tecnicoNuevo.intervencion        
    }
  };
    return this.api.post('tecnicos/nuevo', body);
  }
  getTecnico(id: number): Observable<any> {
    return this.api.get('tecnicos/' + id);
  }
  updateTecnico(id:number, tecnicoActualizado: Tecnico): Observable<any> {
    let body = {'tecnico': tecnicoActualizado};
    return this.api.put('tecnicos', id, body);
  }
  deleteTecnico(id: number): Observable<any> {
    return this.api.delete('tecnicos/eliminar', id);
  }
  // Servicios Subcontratistas
  getAllSubcontratistas(): Observable<any> {
    return this.api.get('subcontratistas');
  }
  getAllSubcontratistasObra(idObra: number): Observable<any> {
    return this.api.get('subcontratistas/Obra/' + idObra);
  }
  createSubcontratista(subcontratistaNuevo: Subcontratista, contacto_id:number, obra_id: number): Observable<any> {
    let body = {'subcontratista': {
      "contacto_id": contacto_id,
      "obra_id": obra_id,
      "intervencion": subcontratistaNuevo.intervencion        
    }
  };
    return this.api.post('subcontratistas/nuevo', body);
  }
  getSubcontratista(id: number): Observable<any> {
    return this.api.get('subcontratistas/' + id);
  }
  updateSubcontratista(id:number, subcontratistaActualizado: Subcontratista): Observable<any> {
    let body = {'subcontratista': subcontratistaActualizado};
    return this.api.put('subcontratistas', id, body);
  }
  deleteSubcontratista(id: number): Observable<any> {
    return this.api.delete('subcontratistas/eliminar', id);
  }
}
