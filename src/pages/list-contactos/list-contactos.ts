import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { ContactosProvider } from '../../providers/contactos/contactos';
import { Contacto } from '../../models/contacto';

/**
 * Generated class for the ListContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-contactos',
  templateUrl: 'list-contactos.html',
})
export class ListContactosPage {
  currentItems: Contacto[];

  constructor(public navCtrl: NavController, public contactosSrv: ContactosProvider, 
              public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.contactosSrv.getAllContactos().subscribe((resp:any) => {
      if(resp && resp.success){
        this.currentItems = resp.contactos;
        
      } else {
        this.doErrorToastContacto('Error al obtener Contactos');
      }
    }, (err) => {
      this.doErrorToastContacto('Error al obtener Contactos');
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
    let addModal = this.modalCtrl.create('ContactoCreatePage');
    addModal.onDidDismiss(contactoNuevo => {
      if (contactoNuevo) {
        console.log(contactoNuevo);
        
        this.contactosSrv.createContacto(contactoNuevo).subscribe((resp:any) => {
          if(resp && resp.success){
            console.log('Contacto creada');
            this.navCtrl.push(ListContactosPage);
            
          } else {
            this.doErrorToastContacto('Error creando Contacto');
          }
        }, (err) => {
          this.doErrorToastContacto('Error creando Contacto');
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
    
    this.contactosSrv.deleteContacto(item.id).subscribe((resp:any) => {
      if(resp && resp.success){
        console.log('Contacto eliminada');
        this.navCtrl.push(ListContactosPage);
        
      } else {
        this.doErrorToastContacto('Error eliminando Contacto');
      }
    }, (err) => {
      this.doErrorToastContacto('Error actualizando Contacto');
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Contacto) {
    this.navCtrl.push('ContactoDetailPage', {
      contacto: item
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  updateItem(item: Contacto) {
    let addModal = this.modalCtrl.create('ContactoCreatePage', item);
    addModal.onDidDismiss(contactoActualizado => {
      if (contactoActualizado) {
        console.log(contactoActualizado);
        
        this.contactosSrv.updateContacto(item.id, contactoActualizado).subscribe((resp:any) => {
          if(resp && resp.success){
            console.log('Contacto actualizado');
            this.navCtrl.push(ListContactosPage);
            
          } else {
            this.doErrorToastContacto('Error actualizando Contacto');
          }
        }, (err) => {
          this.doErrorToastContacto('Error actualizando Contacto');
        });
      }
    })
    addModal.present();
  }

  doErrorToastContacto(msg: string) {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
      toast.present();
  }

}
