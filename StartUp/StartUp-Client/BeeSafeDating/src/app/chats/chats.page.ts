import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChatService } from '../services/chat-service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage {
  public chats: any;

  constructor(public nav: NavController, public chatService: ChatService) {
    // get sample data only
    this.chats = chatService.getAll();
  }

  viewChat(id) {
    this.nav.navigateForward('/chat/' + id);
  }
}
