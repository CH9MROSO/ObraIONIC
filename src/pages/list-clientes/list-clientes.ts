import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { ClientesProvider } from '../../providers/clientes/clientes';
import { Cliente } from '../../models/cliente';

/**
 * Generated class for the ListClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-clientes',
  templateUrl: 'list-clientes.html',
})
export class ListClientesPage {
  currentItems: Cliente[];

  constructor(public navCtrl: NavController, public clientesSrv: ClientesProvider, 
              public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.clientesSrv.getAllClientes().subscribe((resp:any) => {
      if(resp && resp.success){
        this.currentItems = resp.clientes;
        
      } else {
        this.doErrorToastCliente('Error al obtener Clientes');
      }
    }, (err) => {
      this.doErrorToastCliente('Error al obtener Clientes');
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
    let addModal = this.modalCtrl.create('ClienteCreatePage');
    addModal.onDidDismiss(clienteNuevo => {
      if (clienteNuevo) {
        console.log(clienteNuevo);
        
        this.clientesSrv.createCliente(clienteNuevo).subscribe((resp:any) => {
          if(resp && resp.success){
            console.log('Cliente creada');
            this.navCtrl.push(ListClientesPage);
            
          } else {
            this.doErrorToastCliente('Error creando Cliente');
          }
        }, (err) => {
          this.doErrorToastCliente('Error creando Cliente');
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
    
    this.clientesSrv.deleteCliente(item.id).subscribe((resp:any) => {
      if(resp && resp.success){
        console.log('Cliente eliminada');
        this.navCtrl.push(ListClientesPage);
        
      } else {
        this.doErrorToastCliente('Error eliminando Cliente');
      }
    }, (err) => {
      this.doErrorToastCliente('Error actualizando Cliente');
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Cliente) {
    this.navCtrl.push('ClienteDetailPage', {
      cliente: item
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  updateItem(item: Cliente) {
    let addModal = this.modalCtrl.create('ClienteCreatePage', item);
    addModal.onDidDismiss(clienteActualizado => {
      if (clienteActualizado) {
        console.log(clienteActualizado);
        
        this.clientesSrv.updateCliente(item.id, clienteActualizado).subscribe((resp:any) => {
          if(resp && resp.success){
            console.log('Cliente actualizado');
            this.navCtrl.push(ListClientesPage);
            
          } else {
            this.doErrorToastCliente('Error actualizando Cliente');
          }
        }, (err) => {
          this.doErrorToastCliente('Error actualizando Cliente');
        });
      }
    })
    addModal.present();
  }

  doErrorToastCliente(msg: string) {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
      toast.present();
  }

}
