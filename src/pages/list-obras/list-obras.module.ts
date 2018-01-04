import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListObrasPage } from './list-obras';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ListObrasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListObrasPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListObrasPage
  ]
})
export class ListObrasPageModule {}
