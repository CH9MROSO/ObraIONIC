import { ConstantesProvider } from './../../providers/constantes/constantes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { VisitasProvider } from '../../providers/visitas/visitas';
import { Visita } from '../../models/visita';
import { Obra } from '../../models/obra';

/**
 * Generated class for the ListVisitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-visitas',
  templateUrl: 'list-visitas.html',
})
export class ListVisitasPage {
  currentObra: Obra;
  currentItems: Visita[];
  estadosElementos;
  estadosDocumentos;

  constructor(public navCtrl: NavController, public navParam: NavParams, public visitasSrv: VisitasProvider, 
              public modalCtrl: ModalController, public toastCtrl: ToastController, public constantes: ConstantesProvider) {
    this.estadosElementos = constantes.estadosDocumentos;
    this.estadosDocumentos = constantes.estadosDocumentos;
    this.currentObra = this.navParam.get('obra');
    this.visitasSrv.getAllVisitasObra(this.currentObra.id).subscribe((resp:any) => {
      if(resp && resp.success){
        this.currentItems = resp.visitas;
        
      } else {
        this.doErrorToastVisita('Error al obtener Visitas');
      }
    }, (err) => {
      this.doErrorToastVisita('Error al obtener Visitas');
    });
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('VisitaCreatePage');
    addModal.onDidDismiss(visitaNueva => {
      if (visitaNueva) {
        console.log(visitaNueva);
        
        this.visitasSrv.createVisita(visitaNueva).subscribe((resp:any) => {
          if(resp && resp.success){
            console.log('Visita creada');
            this.navCtrl.push(ListVisitasPage);
            
          } else {
            this.doErrorToastVisita('Error creando Visita');
          }
        }, (err) => {
          this.doErrorToastVisita('Error creando Visita');
        });
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    console.log(item.id);
    
    this.visitasSrv.deleteVisita(item.id).subscribe((resp:any) => {
      if(resp && resp.success){
        console.log('Visita eliminada');
        this.navCtrl.push(ListVisitasPage);
        
      } else {
        this.doErrorToastVisita('Error eliminando Visita');
      }
    }, (err) => {
      this.doErrorToastVisita('Error actualizando Visita');
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  updateItem(item: Visita) {
    let addModal = this.modalCtrl.create('VisitaCreatePage', item);
    addModal.onDidDismiss(visitaActualizada => {
      if (visitaActualizada) {
        console.log(visitaActualizada);
        
        this.visitasSrv.updateVisita(item.id, visitaActualizada).subscribe((resp:any) => {
          if(resp && resp.success){
            console.log('Visita actualizada');
            this.navCtrl.push(ListVisitasPage);
            
          } else {
            this.doErrorToastVisita('Error actualizando Visita');
          }
        }, (err) => {
          this.doErrorToastVisita('Error actualizando Visita');
        });
      }
    })
    addModal.present();
  }

  colorEstado(item){
    let color = 'primary';
    switch (Number.parseInt(item)) {
      case 0:
        color ='faint';
        break;
      case 1:
        color ='danger';
        break;
      case 2:
        color ='primary';
        break;
      case 3:
        color ='secondary';
        break;
      default:
        color ='faint';
        break;
    }
    return color;
  }
  estadoElementos(item){
    let estado = this.constantes.estadosElementos[0].name;
    switch (Number.parseInt(item)) {
      case 0:
        estado =this.constantes.estadosElementos[0].name;
        break;
      case 1:
        estado =this.constantes.estadosElementos[1].name;
        break;
      case 2:
        estado =this.constantes.estadosElementos[2].name;
        break;
      case 3:
        estado =this.constantes.estadosElementos[3].name;
        break;
      default:
        estado =this.constantes.estadosElementos[0].name;
        break;
    }
    return estado;
  }
  estadoDocumentos(item){
    let estado = this.constantes.estadosDocumentos[0].name;
    switch (Number.parseInt(item)) {
      case 0:
        estado =this.constantes.estadosDocumentos[0].name;
        break;
      case 1:
        estado =this.constantes.estadosDocumentos[1].name;
        break;
      case 2:
        estado =this.constantes.estadosDocumentos[2].name;
        break;
      case 3:
        estado =this.constantes.estadosDocumentos[3].name;
        break;
      default:
        estado =this.constantes.estadosDocumentos[0].name;
        break;
    }
    return estado;
  }

  doErrorToastVisita(msg: string) {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
      toast.present();
  }

}

