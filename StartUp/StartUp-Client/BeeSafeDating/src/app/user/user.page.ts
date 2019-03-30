import { Component } from '@angular/core';
import { UserService } from '../services/user-service';
import { PostService } from '../services/post-service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {
  public user: any;

  constructor(public nav: NavController, public userService: UserService, public postService: PostService) {
    // get sample data only
    this.user = userService.getItem(0);

    Object.assign(this.user, {
      'followers': 199,
      'following': 48,
      'favorites': 14,
      'posts': postService.getAll()
    });
  }

  toggleLike(post) {
    // if user liked
    if(post.liked) {
      post.likeCount--;
    } else {
      post.likeCount++;
    }

    post.liked = !post.liked
  }

  // on click, go to user timeline
  viewUser(userId) {
    this.nav.navigateForward('/user/' + userId)
  }

  // on click, go to post detail
  viewPost(postId) {
    this.nav.navigateForward('/post/' + postId)
  }
}
