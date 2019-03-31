import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public email: string;
  public password: string;
  constructor(public nav: NavController, private auth: AuthService, private alertController: AlertController) {
    this.email = 'alana@mailinator.com';
    this.password = '123456';
  }

  register() {
    this.nav.navigateRoot('register');
  }

  login() {
    // add your check auth here
    this.auth.emailLogin(this.email, this.password)
      .then(() => {
        this.nav.navigateRoot('home');
      })
      .catch(() => {
        this.presentAlert();
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Denied',
      message: 'Email or Password incorrect',
      buttons: ['OK']
    });

    await alert.present();
  }
}
