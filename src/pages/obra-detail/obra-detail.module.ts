import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObraDetailPage } from './obra-detail';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ObraDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ObraDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ObraDetailPage
  ]
})
export class ObraDetailPageModule { }
