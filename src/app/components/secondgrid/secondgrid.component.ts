import { Component, OnInit } from '@angular/core';
import { TextPost } from '../../models/TextPost';
import { TextpostService } from '../../services/textpost.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminInformationService } from '../../services/admin-information.service';
import { TextDialogComponent } from '../secondgrid/text-dialog/text-dialog.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  post: TextPost;
}

@Component({
  selector: 'app-secondgrid',
  templateUrl: './secondgrid.component.html',
  styleUrls: ['./secondgrid.component.css']
})
export class SecondgridComponent implements OnInit {

  textPosts: TextPost[];
  dummyPost: TextPost = { id: '0', description: '0', title: '0', timestamp: 0 };
  Bordercounter: number = 0;
  globalCounter: number = 0;

  isAdmin: boolean;



  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: '#00897b', post: this.dummyPost },
    { text: 'Two', cols: 1, rows: 2, color: '#00695c', post: this.dummyPost },
    { text: 'Three', cols: 1, rows: 1, color: '#004d40', post: this.dummyPost },
    { text: 'Four', cols: 2, rows: 1, color: '#00796b', post: this.dummyPost },
  ];

  colorArray: string[] = ['#00897b', '#00695c', '#004d40', '#00796b', '#00665c', '#00b3a1', '#00332e'];

  tiles2: Tile[] = [];

  constructor(private textPostService: TextpostService, public dialog: MatDialog, private adminService: AdminInformationService) {

  }

  ngOnInit(): void {


    this.adminService.getIsAdminLoggedIn().subscribe(value => {
      this.isAdmin = value;
    });


    // Pattern that will be repeated if the length of the database Array is taller than the size of this one (Currently 10)
    let positionArray = [
      { rows: 2, cols: 1, color: "#00695c" },
      { rows: 1, cols: 2, color: "#00695c" },
      { rows: 1, cols: 1, color: "#004d40" },
      { rows: 1, cols: 1, color: "#00695c" },
      { rows: 1, cols: 2, color: "#004d40" },
      { rows: 1, cols: 2, color: "#004d40" },
      { rows: 1, cols: 1, color: "#00796b" },
      { rows: 2, cols: 1, color: "#004d40" },
      { rows: 1, cols: 1, color: "#00897b" },
      { rows: 1, cols: 2, color: "#00796b" },
    ];


    this.textPostService.getTextPosts().subscribe(response => {

      //Clear arry else you will alwasy add the whole existing array
      this.tiles2 = [];
      this.textPosts = response;



      let index = 0;

      this.textPosts.forEach(element => {
        let tileObject = {
          text: element.title,
          cols: positionArray[index].cols,
          rows: positionArray[index].rows,
          color: this.colorArray[Math.floor(Math.random() * (this.colorArray.length))],
          post: this.textPosts[this.globalCounter]
        }
        this.tiles2.push(tileObject);
        (index >= positionArray.length ? index = 0 : index = index + 1);

        if (this.Bordercounter == positionArray.length) {
          this.Bordercounter = 0;
        }

        //executed if Database Array is taller than 10 or (positionArray size)
        positionArray.push({ rows: positionArray[this.Bordercounter].rows, cols: positionArray[this.Bordercounter].cols, color: this.colorArray[Math.floor(Math.random() * (this.colorArray.length))] })

        this.Bordercounter++;
        this.globalCounter++;
      });
    })
  }

  openDialogItem(post: TextPost) {

    console.log(post.title);
    this.dialog.open(TextDialogComponent, {
      data: { id: post.id, title: post.title, description: post.description, timestamp: post.timestamp }
    });
  }

  openDialogNewItem() {
    this.dialog.open(TextDialogComponent, {
      data: { data: "" }
    });
  }



}
