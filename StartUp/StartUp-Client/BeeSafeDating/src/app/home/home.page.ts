import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostService } from '../services/post-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public posts: any;

  constructor(public nav: NavController, public postService: PostService) {
    this.posts = postService.getAll();
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

  // on click, go to post detail
  viewPost(postId) {
    this.nav.navigateForward('post/' + postId)
  }

  // on click, go to user timeline
  viewUser(userId) {
    this.nav.navigateForward('user/' + userId)
  }
}
