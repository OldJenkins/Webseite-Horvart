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
}

@Component({
  selector: 'app-secondgrid',
  templateUrl: './secondgrid.component.html',
  styleUrls: ['./secondgrid.component.css']
})
export class SecondgridComponent implements OnInit {

  textPost: TextPost[];
  counter: number = 0;
  isAdmin: boolean;

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: '#00897b' },
    { text: 'Two', cols: 1, rows: 2, color: '#00695c' },
    { text: 'Three', cols: 1, rows: 1, color: '#004d40' },
    { text: 'Four', cols: 2, rows: 1, color: '#00796b' },
  ];

  colorArray: string[] = ['#00897b', '#00695c', '#004d40', '#00796b', '#00665c', '#00b3a1', '#00332e'];



  tiles2: Tile[] = [];

  constructor(private textPostService: TextpostService, public dialog: MatDialog, private adminService: AdminInformationService) {


  }

  ngOnInit(): void {


    this.adminService.getIsAdminLoggedIn().subscribe(value => {
      this.isAdmin = value;
    });

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
      this.textPost = response;

      let index = 0;

      this.textPost.forEach(element => {
        let tileObject = { text: element.title, cols: positionArray[index].cols, rows: positionArray[index].rows, color: this.colorArray[Math.floor(Math.random() * (this.colorArray.length))] }
        this.tiles2.push(tileObject);
        (index >= positionArray.length ? index = 0 : index = index + 1);

        if (this.counter == positionArray.length) {
          this.counter = 0;
        }

        positionArray.push({ rows: positionArray[this.counter].rows, cols: positionArray[this.counter].cols, color: this.colorArray[Math.floor(Math.random() * (this.colorArray.length))] })
        console.log(this.colorArray[Math.floor(Math.random() * (this.colorArray.length))]);
        this.counter++;
      });
    })
  }

  openDialogNewItem() {
    this.dialog.open(TextDialogComponent, {
      data: {}
    });
  }

}
