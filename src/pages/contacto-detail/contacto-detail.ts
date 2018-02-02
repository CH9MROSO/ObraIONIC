import { CallNumber } from '@ionic-native/call-number';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Contacto } from '../../models/contacto';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ContactoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto-detail',
  templateUrl: 'contacto-detail.html',
})
export class ContactoDetailPage {

  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams,
              private callNumber: CallNumber, private emailComposer: EmailComposer,
              public toastCtrl: ToastController) {
    this.item = navParams.get('item') || new Contacto();
    this.item.type = navParams.get('typeItem') || 'Contacto';
  }

  callTel(tel : string) {
    this.callNumber.callNumber(tel, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

  sendEmail(emailTo: string){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      this.emailComposer.hasPermission().then((isPermitted: boolean)=>{
        {
          let email = {
            to: emailTo,
            subject: 'Obra',
            body: 'Hola, '
          };
          
          // Send a text message using default options
          this.emailComposer.open(email);
        }
      }).catch((error : any) =>
      {   
        this.doErrorToast('No hay permisos concedidos de acceso a cuenta');
        console.log('No hay permisos concedidos de acceso a cuenta');
        console.dir(error);
      });
   })
   .catch((error : any) =>
   {  
    this.doErrorToast('El usuario parece no tener una cuenta email asignada en el dispositivo');
      console.log('El usuario parece no tener una cuenta email asignada en el dispositivo');
      console.dir(error);
   });
     

  }

  doErrorToast(msg: string) {
    // Unable to log in
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


}
