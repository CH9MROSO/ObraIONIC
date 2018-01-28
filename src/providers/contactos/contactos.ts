import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Api } from '../providers';
import { Contacto } from '../../models/contacto';

@Injectable()
export class ContactosProvider {

  constructor(public api: Api) {
  }
  getAllContactos(): Observable<any> {
    return this.api.get('contactos');
  }
  createContacto(contactoNuevoOriginal: any): Observable<any> {
    let contactoNuevo = JSON.parse(JSON.stringify(contactoNuevoOriginal))
    delete contactoNuevo.contacto_id;
    delete contactoNuevo.intervencion;
    delete contactoNuevo.fase_obra;
    delete contactoNuevo.cargo;
    let body = {'contacto': contactoNuevo};
    return this.api.post('contactos/nuevo', body);
  }
  getContacto(id: number): Observable<any> {
    return this.api.get('contactos/' + id);
  }
  updateContacto(id:number, contactoActualizado: any): Observable<any> {
    let body = {'contacto': contactoActualizado};
    return this.api.put('contactos', id, body);
  }
  deleteContacto(id: number): Observable<any> {
    return this.api.delete('contactos/eliminar', id);
  }
}
