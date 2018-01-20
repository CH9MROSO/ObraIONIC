import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAgentesObraPage } from './list-agentes-obra';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ListAgentesObraPage,
  ],
  imports: [
    IonicPageModule.forChild(ListAgentesObraPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListAgentesObraPage
  ]
})
export class ListAgentesPageModule {}
