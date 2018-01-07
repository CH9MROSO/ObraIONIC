import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacto } from '../../models/contacto';

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

  item: Contacto;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.item = navParams.get('contacto') || new Contacto();
  }

}
