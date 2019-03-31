import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'chat/:id', loadChildren: './chat-detail/chat-detail.module#ChatDetailPageModule' },
  { path: 'chats', loadChildren: './chats/chats.module#ChatsPageModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'post/:id', loadChildren: './post/post.module#PostPageModule' },
  { path: 'recent-posts', loadChildren: './recent-posts/recent-posts.module#RecentPostsPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'user/:id', loadChildren: './user/user.module#UserPageModule' },
  { path: 'wall-posts', loadChildren: './wall-posts/wall-posts.module#WallPostsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
