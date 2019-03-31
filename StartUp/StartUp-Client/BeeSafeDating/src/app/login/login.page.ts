import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public email: string;
  public password: string;
  constructor(public nav: NavController, private auth: AuthService) {

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
        alert('FAILED');
      });
  }
}
