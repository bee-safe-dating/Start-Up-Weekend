import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FileStorageService } from './../services/storage.fileservice';
import { HomePage } from './home.page';
import {SwipeCardLibModule} from 'ng-swipe-card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwipeCardLibModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
    providers: [FileStorageService],
})
export class HomePageModule {}
