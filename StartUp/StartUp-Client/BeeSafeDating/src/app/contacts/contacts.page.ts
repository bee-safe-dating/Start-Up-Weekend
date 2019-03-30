import { Component } from '@angular/core';
import { UserService } from '../services/user-service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage {
  public contacts: any;

  constructor(public nav: NavController, public userService: UserService) {
    this.contacts = userService.getAll();
  }

  // on click, go to user timeline
  viewUser(userId) {
    this.nav.navigateForward('/user/' + userId)
  }
}

