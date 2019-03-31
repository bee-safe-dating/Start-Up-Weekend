import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { FileStorageService } from './../services/storage.fileservice';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostService } from '../services/post-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public index: number;
  public post: any;
  public posts: any[];

  constructor(public nav: NavController, public postService: PostService, private filestore: FileStorageService,private camera: Camera) {
    this.posts = postService.getAll();
    this.post = this.posts[0];
    this.index = 0;
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
 async pickImage() {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    try {
      let cameraInfo = await this.camera.getPicture(options);
      let blobInfo = await this.filestore.makeFileIntoBlob(cameraInfo);
      let uploadInfo: any = await this.filestore.uploadToFirebase(blobInfo);

      alert("File Upload Success " + uploadInfo.fileName);
    } catch (e) {
      console.log(e.message);
      alert("File Upload Error " + e.message);
    }
  }
  // on click, go to user timeline
  viewUser(userId) {
    this.nav.navigateForward('user/' + userId)
  }

  removeBy() {
    this.index = this.index + 1;

    if (this.index > 3) {
      this.index = 0;
    }

    this.post = this.posts[this.index];
  }
}
