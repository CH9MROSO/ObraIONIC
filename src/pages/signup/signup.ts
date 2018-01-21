import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';

import { User, Api } from '../../providers/providers';
import { MainPage } from '../pages';
import { ConstantesProvider } from '../../providers/constantes/constantes';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: {  first_name: string, surname: string, birthday: string, gender: string, 
              email: string, password: string, 
              appointment: string, collage: string, num_collage: string, 
              role: string, _username: string, _password: string, token: string} = 
/*   {
    first_name: 'Francisco',
    surname: 'Robles Pérez',
    birthday: '1980-01-01',
    gender: 'Masculino',
    email: 'test@example.com',
    password: 'test',
    appointment: 'Arquitecto Técnico',
    collage: 'COAAT-CC',
    num_collage: '1234',
    role: 'Usuario',
    _username: '',
    _password: '',
    token : ''
  }; */
  {
    first_name: '',
    surname: '',
    birthday: '',
    gender: '',
    email: '',
    password: '',
    appointment: '',
    collage: '',
    num_collage: '',
    role: 'Usuario',
    _username: '',
    _password: '',
    token : ''
  };
  
  id: number;
  generos;

  modeUpdate: boolean = false;

  // Our translated text strings
  private signupErrorString: string;

  private loginErrorString: string;

  constructor(public navCtrl: NavController,
              navParams: NavParams,
              public api: Api,
              public user: User,
              public toastCtrl: ToastController,
              public translateService: TranslateService,
              public constantes:ConstantesProvider) {
    this.generos = constantes.generos;           
    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    });
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
    if(navParams.data.configPerfil){
      this.modeUpdate = navParams.data.configPerfil;
      this.getPerfil();
    }
  }

  getPerfil() {
    this.api.get('perfil').subscribe((resp:any) => {
      if(resp.id){
        this.id = resp.id;
        this.account = resp;
        
      } else {
        this.doErrorToast('Error obteniendo Perfil Usuario');
      }
    }, (err) => {
      this.doErrorToast('Error obteniendo Perfil de Usuario');
    });
  }

  updateSignup() {
    // Attempt to login in through our User service
    this.user.updateSignup(this.id, this.account).subscribe((resp: any) => {
      if(resp){
        this.navCtrl.push(WelcomePage);
      } else {
        this.doErrorToast('Error actualizando Perfil de Usuario');
      }
    }, (err) => {
      // Unable to sign up
      this.doErrorToast('Error actualizando Perfil de Usuario');
    });
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp: any) => {
      if(resp){
        this.navCtrl.push(WelcomePage);
      }
    }, (err) => {

      this.navCtrl.push(WelcomePage);

      // Unable to sign up
      this.doErrorToast(this.signupErrorString);
    });
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp:any) => {
      if(resp && resp.success){
        this.navCtrl.push(MainPage);
      } else {
        this.doErrorToast(this.loginErrorString);
      }
    }, (err) => {
      this.doErrorToast(this.loginErrorString);
    });
  }

  doErrorToast(msg: string) {
    // Unable to log in
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
}
  
}
