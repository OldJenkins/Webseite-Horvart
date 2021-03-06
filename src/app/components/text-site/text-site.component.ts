import { Component, OnInit } from '@angular/core';
import { TextPost } from '../../models/TextPost';
import { TextpostService } from '../../services/textpost.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminInformationService } from '../../services/admin-information.service';
import { TextDialogComponent } from '../text-site/text-dialog/text-dialog.component';


// Custom Model Representing the Content of One Tile
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  post: TextPost;
}

@Component({
  selector: 'app-text-site',
  templateUrl: './text-site.component.html',
  styleUrls: ['./text-site.component.css']
})


export class TextSiteComponent implements OnInit {

  textPosts: TextPost[];
  dummyPost: TextPost = { id: '0', description: '0', title: '0', timestamp: 0 };
  Bordercounter: number = 0;
  globalCounter: number = 0;

  isAdmin: boolean;

  // Defining teh Frist Tiles
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: '#00897b', post: this.dummyPost },
    { text: 'Two', cols: 1, rows: 2, color: '#00695c', post: this.dummyPost },
    { text: 'Three', cols: 1, rows: 1, color: '#004d40', post: this.dummyPost },
    { text: 'Four', cols: 2, rows: 1, color: '#00796b', post: this.dummyPost },
  ];

  // Array to Hold all possible Color Values for the Tiles
  colorArray: string[] = ['#00897b', '#00695c', '#004d40', '#00796b', '#00665c', '#00b3a1', '#00332e'];

  // Actual Array to hold the Tiles
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

      //Clear array else you will alwasy add the whole existing array
      this.tiles2 = [];
      this.textPosts = response.sort((a, b) => b.timestamp - a.timestamp);


      let index = 0;

      // Pull All TextPost Objets from databas an map into our Tile Objects
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

        // if the Counter counted to positionarrySize , the Tiles will repeat
        if (this.Bordercounter == positionArray.length) {
          this.Bordercounter = 0;
        }

        //executed if Database Array is taller than 10 or (positionArray size)
        positionArray.push({ rows: positionArray[this.Bordercounter].rows, cols: positionArray[this.Bordercounter].cols, color: this.colorArray[Math.floor(Math.random() * (this.colorArray.length))] })

        this.Bordercounter++;

        // Use dto fill the Tile array
        this.globalCounter++;
      });
    })
  }

  // if the Admin wants du update
  openDialogItem(post: TextPost) {
    console.log(post.title);
    this.dialog.open(TextDialogComponent, {
      data: { id: post.id, title: post.title, description: post.description, timestamp: post.timestamp }
    });
  }


  // If the Admin wants to create
  openDialogNewItem() {
    this.dialog.open(TextDialogComponent, {
      data: { data: "" }
    });
  }

}
