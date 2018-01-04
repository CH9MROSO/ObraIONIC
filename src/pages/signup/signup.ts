import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

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
              role: string, _username: string, _password: string, token: string} = {
    first_name: 'Francisco',
    surname: 'Robles Pérez',
    birthday: '1980-01-01',
    gender: 'Masculino',
    email: 'test@example.com',
    password: '1234',
    appointment: 'Arquitecto Técnico',
    collage: 'COAAT-CC',
    num_collage: '1234',
    role: 'Usuario',
    _username: '',
    _password: '',
    token : ''
  };

  // Our translated text strings
  private signupErrorString: string;

  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    });
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp: any) => {
      if(resp){
        this.account._username = this.account.email;
        this.account._password = this.account.password;
        this.doLogin();
      }
    }, (err) => {

      this.navCtrl.push(WelcomePage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp:any) => {
      if(resp && resp.success){
        this.navCtrl.push(MainPage);
      } else {
        this.doErrorLogin();
      }
    }, (err) => {
      this.doErrorLogin();
    });
  }

  doErrorLogin() {
    this.navCtrl.push(WelcomePage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
  }
  
}
