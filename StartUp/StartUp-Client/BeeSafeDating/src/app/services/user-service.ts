import {Injectable} from "@angular/core";
import {USERS} from "./mock-users";

@Injectable({providedIn: 'root'})
export class UserService {
  private users;

  constructor() {
    this.users = USERS;
  }
  getAll() {
    return this.users;
  }

  getItem(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === parseInt(id)) {
        return this.users[i];
      }
    }
    return null;
  }

  remove(item) {
    this.users.splice(this.users.indexOf(item), 1);
  }
}
