import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostService } from '../services/post-service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage {
  public post: any;

  constructor(public nav: NavController, public postService: PostService) {
    // get sample data only
    //this.post = postService.getItem(navParams.get('id'));
    this.post = postService.getItem(0);
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
    this.nav.navigateForward('/user/' + userId);
  }
}
