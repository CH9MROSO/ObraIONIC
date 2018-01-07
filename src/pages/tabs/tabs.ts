import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Api } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  signupParams= {
    configPerfil: true
  }

  constructor(public navCtrl: NavController, public translateService: TranslateService, public api: Api) {

      this.tab1Title = 'Obras';
/*       this.tab2Title = 'Buscar'; */
      this.tab2Title = 'Contactos';
      this.tab3Title = 'Perfil';
  }
}
