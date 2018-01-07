import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactoDetailPage } from './contacto-detail';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ContactoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactoDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactoDetailPage
  ]
})
export class ContactoDetailPageModule {}
