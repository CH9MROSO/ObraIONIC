import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitaCreatePage } from './visita-create';

@NgModule({
  declarations: [
    VisitaCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(VisitaCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    VisitaCreatePage
  ]
})
export class VisitaCreatePageModule {}
