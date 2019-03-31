// camera.service.ts
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from "@ionic-native/file/ngx";
// FIREBASE
import * as firebase from "firebase";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FileStorageService {
  constructor(private camera: Camera, private file: File) { }

//methods
uploadToFirebase(_imageBlobInfo) {
    firebase.initializeApp(environment.firebase);
    console.log("uploadToFirebase");
    return new Promise((resolve, reject) => {
      let fileRef = firebase.storage()
                        .ref("images/" + _imageBlobInfo.fileName);
      let uploadTask = fileRef.put(_imageBlobInfo.imgBlob);
      uploadTask.on(
        "state_changed",
        (_snap: any) => {
          console.log(
            "progess " +
              (_snap.bytesTransferred / _snap.totalBytes) * 100
          );
        },
        _error => {
          console.log(_error);
          reject(_error);
        },
        () => {
          // completion...
          resolve(uploadTask.snapshot);
        }
      );
    });
  }

  // FILE STUFF
  makeFileIntoBlob(_imagePath) {
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      let fileName = "";
      this.file
        .resolveLocalFilesystemUrl(_imagePath)
        .then(fileEntry => {
          let { name, nativeURL } = fileEntry;
          // get the path..
          let path = nativeURL
                      .substring(0, nativeURL.lastIndexOf("/"));
          fileName = name;
          // we are provided the name, so now read the file 
          // into a buffer
          return this.file.readAsArrayBuffer(path, name);
        })
        .then(buffer => {
          // get the buffer and make a blob to be saved
          let imgBlob = new Blob([buffer], {
            type: "image/jpeg"
          });
          
          // pass back blob and the name of the file for saving
          // into fire base
          resolve({
            fileName,
            imgBlob
          });
        })
        .catch(e => reject(e));
    });
  }
}