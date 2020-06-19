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

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  tiles2: Tile[] = [];

  constructor(private textPostService: TextpostService, public dialog: MatDialog, private adminService: AdminInformationService) { }

  ngOnInit(): void {
    let positionArray = [
      { rows: 3, cols: 1, color: "#00897b" },
      { rows: 1, cols: 2, color: "#00695c" },
      { rows: 1, cols: 1, color: "#004d40" },
      { rows: 2, cols: 1, color: "#00796b" },

      { rows: 1, cols: 2, color: "#004d40" },
      { rows: 3, cols: 1, color: "#00695c" },
      { rows: 2, cols: 1, color: "#00796b" },
      { rows: 1, cols: 1, color: "#00897b" },
    ];

    this.textPostService.getTextPosts().subscribe(response => {
      this.textPost = response;

      let index = 0;

      this.textPost.forEach(element => {
        let tileObject = { text: element.title, cols: positionArray[index].cols, rows: positionArray[index].rows, color: positionArray[index].color }
        this.tiles2.push(tileObject);
        (index >= positionArray.length ? index = 0 : index = index + 1);
      });
    })
  }

  openDialogNewItem() {
    this.dialog.open(TextDialogComponent, {
      data: {}
    });
  }

}
