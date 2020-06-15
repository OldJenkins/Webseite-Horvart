import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { CompileShallowModuleMetadata } from '@angular/compiler';



@Component({
  selector: 'image-upload-task',
  templateUrl: './image-upload-task.component.html',
  styleUrls: ['./image-upload-task.component.css']
})
export class ImageUploadTaskComponent implements OnInit {


  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit(): void {
  }

  startUpload(event) {

    // The storage path
    const name = `imageposts/${Date.now()}_${event.target.files[0].name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(name);

    // The main task
    this.task = this.storage.upload(name, event.target.files[0]);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    console.log("Starting upload");

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        console.log("still waiting for finalize");
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db.collection('imagepost').add({ path: this.downloadURL, title: event.target.files[0].name, time: Date.now() });
        console.log("post was added")
      }),
    );

    this.snapshot.subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );
  }

  formatNumber(valueToFormat: string) {
    return Math.round(parseInt(valueToFormat) * 100) / 100 + "%";
  }

}
