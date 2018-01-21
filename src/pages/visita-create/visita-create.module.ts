import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitaCreatePage } from './visita-create';

@NgModule({
  declarations: [
    VisitaCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(VisitaCreatePage),
  ],
})
export class VisitaCreatePageModule {}
