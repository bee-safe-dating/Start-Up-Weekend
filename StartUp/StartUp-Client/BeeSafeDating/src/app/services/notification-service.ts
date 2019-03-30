import {Injectable} from "@angular/core";
import {NOTIFICATIONS} from "./mock-notifications";

@Injectable({providedIn: 'root'})
export class NotificationService {
  private notifications: any;

  constructor() {
    this.notifications = NOTIFICATIONS;
  }
  getAll() {
    return this.notifications;
  }

  getItem(id) {
    for (let i = 0; i < this.notifications.length; i++) {
      if (this.notifications[i].id === parseInt(id)) {
        return this.notifications[i];
      }
    }
    return null;
  }

  remove(item) {
    this.notifications.splice(this.notifications.indexOf(item), 1);
  }
}
