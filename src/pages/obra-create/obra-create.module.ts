import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ObraCreatePage } from './obra-create';

@NgModule({
  declarations: [
    ObraCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ObraCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    ObraCreatePage
  ]
})
export class ObraCreatePageModule {}
