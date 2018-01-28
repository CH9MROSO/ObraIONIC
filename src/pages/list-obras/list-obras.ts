import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { ObrasProvider } from '../../providers/obras/obras';
import { Obra } from '../../models/obra';

/**
 * Generated class for the ListObrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-obras',
  templateUrl: 'list-obras.html',
})
export class ListObrasPage {
  currentItems: Obra[];

  constructor(public navCtrl: NavController, public obrasSrv: ObrasProvider, 
              public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.obrasSrv.getAllObras().subscribe((resp:any) => {
      if(resp && resp.success){
        this.currentItems = resp.obras;
        
      } else {
        this.doErrorToastObra('Error al obtener Obras');
      }
    }, (err) => {
      this.doErrorToastObra('Error al obtener Obras');
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
    let addModal = this.modalCtrl.create('ObraCreatePage');
    addModal.onDidDismiss(obraNueva => {
      if (obraNueva) {
        console.log(obraNueva);
        
        this.obrasSrv.createObra(obraNueva).subscribe((resp:any) => {
          if(resp && resp.success){
            console.log('Obra creada');
            this.navCtrl.setRoot(ListObrasPage);
            
          } else {
            this.doErrorToastObra('Error creando Obra');
          }
        }, (err) => {
          this.doErrorToastObra('Error creando Obra');
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
    
    this.obrasSrv.deleteObra(item.id).subscribe((resp:any) => {
      if(resp && resp.success){
        console.log('Obra eliminada');
        this.navCtrl.setRoot(ListObrasPage);
        
      } else {
        this.doErrorToastObra('Error eliminando Obra');
      }
    }, (err) => {
      this.doErrorToastObra('Error actualizando Obra');
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Obra) {
    this.navCtrl.push('ObraDetailPage', {
      obra: item
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  updateItem(item: Obra) {
    let addModal = this.modalCtrl.create('ObraCreatePage', item);
    addModal.onDidDismiss(obraActualizada => {
      if (obraActualizada) {
        console.log(obraActualizada);
        
        this.obrasSrv.updateObra(item.id, obraActualizada).subscribe((resp:any) => {
          if(resp && resp.success){
            console.log('Obra actualizada');
            this.navCtrl.setRoot(ListObrasPage);
            
          } else {
            this.doErrorToastObra('Error actualizando Obra');
          }
        }, (err) => {
          this.doErrorToastObra('Error actualizando Obra');
        });
      }
    })
    addModal.present();
  }

  doErrorToastObra(msg: string) {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
      toast.present();
  }

}
