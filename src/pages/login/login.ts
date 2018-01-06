import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { _username: string, _password: string, token: string } = {
    _username: 'joaquintest@example.com',
    _password: '1221',
    token: ''
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp:any) => {
      if(resp && resp.success){
        this.doNavigate();
        
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

  doNavigate() {
    let loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: 'Cargando, Espere porfavor...',
      duration: 3000
    });
  
    loading.present();
    this.navCtrl.push(MainPage);
  }
}
