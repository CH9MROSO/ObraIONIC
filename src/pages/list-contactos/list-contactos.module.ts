import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListContactosPage } from './list-contactos';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ListContactosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListContactosPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListContactosPage
  ]
})
export class ListContactosPageModule {}
