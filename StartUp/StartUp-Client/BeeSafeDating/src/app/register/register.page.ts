import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public chat: any;

  constructor(public nav: NavController) {
  }

  register() {
    this.nav.navigateRoot('/home');
  }

  login() {
    // add your check auth here
    this.nav.navigateRoot('/login');
  }
}
