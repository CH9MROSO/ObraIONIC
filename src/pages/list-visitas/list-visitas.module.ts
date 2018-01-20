import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListVisitasPage } from './list-visitas';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ListVisitasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListVisitasPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListVisitasPage
  ]
})
export class ListVisitasPageModule {}
