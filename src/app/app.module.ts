import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';
import { ObrasProvider } from '../providers/obras/obras';
import { AgentesProvider } from '../providers/agentes/agentes';
import { ContactosProvider } from '../providers/contactos/contactos';
import { VisitasProvider } from '../providers/visitas/visitas';
import { ConstantesProvider } from '../providers/constantes/constantes';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

/* import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import {LOCALE_ID} from '@angular/core';

// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es'); */

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Api,
    User,
    Camera,
    CallNumber,
    EmailComposer,
    SplashScreen,
    StatusBar,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ObrasProvider,
    AgentesProvider,
    ContactosProvider,
    VisitasProvider,
    ConstantesProvider
/*     // Estable como idioma Local el ES , por ejemplo en PIPE date
    , { provide: LOCALE_ID, useValue: 'es' } */
  ]
})
export class AppModule { }
