import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Obra } from '../../models/obra';
import { ListVisitasPage } from '../list-visitas/list-visitas';

/**
 * Generated class for the ObraDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obra-detail',
  templateUrl: 'obra-detail.html',
})
export class ObraDetailPage {

  item: Obra;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.item = navParams.get('obra') || new Obra();
  }

  openVisit(){
    this.navCtrl.push('ListVisitasPage', {'obra': this.item});
  }

}

/* export class ObraDetailPage {

  obra: Obra;

  constructor(public navCtrl: NavController, navParams: NavParams, 
              obrasSrv: ObrasProvider, public toastCtrl: ToastController) {
    obrasSrv.getObra(navParams.get('obra').id).subscribe((resp)=>{
      if(resp.obra){
        this.obra = resp.obra;
      }else {
        this.navCtrl.push(ListObrasPage);
        this.doErrorToastObra('Error obteniendo Obra');
      }
    }, (error) =>{
      this.navCtrl.push(ListObrasPage);
      this.doErrorToastObra('Error obteniendo Obra');
    });
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

} */
