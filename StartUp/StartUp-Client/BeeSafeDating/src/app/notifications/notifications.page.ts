import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NotificationService } from '../services/notification-service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage {

  public notifications: any;

  constructor(public nav: NavController, public notificationService: NotificationService) {
    this.notifications = notificationService.getAll();
  }
}
