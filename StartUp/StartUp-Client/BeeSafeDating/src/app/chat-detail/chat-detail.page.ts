import { Component, ViewChild } from '@angular/core';
import { ChatService } from '../services/chat-service';
import { Content, NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage {
  @ViewChild(Content) content: Content;

  public chat: any;
  public newMessage: any;

  constructor(public nav: NavController, public chatService: ChatService) {
    // get sample data only
    this.chat = chatService.getItem(0);
  }

  // send message
  sendMessage() {
    if (this.newMessage) {
      this.chat.messages.push({
        type: 'sent',
        text: this.newMessage,
        image: '',
        time: 'Just now'
      });

      // clear input
      this.newMessage = '';

      // scroll to bottom
      setTimeout(() => {
        // scroll to bottom
        this.content.scrollToBottom();
      }, 200)
    }
  }
}
