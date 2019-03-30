import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Recent posts',
      url: '/recent-posts',
      icon: 'ios-list-box'
    },
    {
      title: 'Message',
      url: '/chats',
      icon: 'ios-mail'
    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: 'ios-notifications'
    },
    {
      title: 'Wall posts',
      url: '/wall-posts',
      icon: 'ios-browsers'
    },
    {
      title: 'Contacts',
      url: '/contacts',
      icon: 'ios-person'
    },
    {
      title: 'Setting',
      url: '/setting',
      icon: 'ios-settings'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'ios-log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
