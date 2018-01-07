import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListClientesPage } from './list-clientes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ListClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListClientesPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListClientesPage
  ]
})
export class ListClientesPageModule {}
