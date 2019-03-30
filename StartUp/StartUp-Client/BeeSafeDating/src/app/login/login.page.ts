import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public nav: NavController) {

  }

  register() {
    this.nav.navigateRoot('register');
  }

  login() {
    // add your check auth here
    this.nav.navigateRoot('home');
  }
}
