import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactoCreatePage } from './contacto-create';

@NgModule({
  declarations: [
    ContactoCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ContactoCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactoCreatePage
  ]
})
export class ContactoCreatePageModule {}
