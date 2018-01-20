import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObraDetailPage } from './obra-detail';
import { TranslateModule } from '@ngx-translate/core';
import { ListAgentesObraPage } from '../list-agentes-obra/list-agentes-obra';

@NgModule({
  declarations: [
    ObraDetailPage,
    ListAgentesObraPage
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
