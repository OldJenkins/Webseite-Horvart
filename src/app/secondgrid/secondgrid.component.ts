import { Component, OnInit } from '@angular/core';
import { TextPost } from '../models/TextPost';
import { TextpostService } from '../services/textpost.service';

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
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  tiles2: Tile[] = [];

  constructor(private textPostService: TextpostService) {}

  ngOnInit(): void {
    let positionArray = [
      {rows: 3, cols: 1, color: "#3a1879"},
      {rows: 1, cols: 2, color: "#467cc6"},
      {rows: 1, cols: 1, color: "#868d24"},
      {rows: 2, cols: 1, color: "#d17d1a"},

      {rows: 1, cols: 2, color: "#821f60"},
      {rows: 3, cols: 1, color: "#a52c0d"},
      {rows: 2, cols: 1, color: "#d17d1a"},
      {rows: 1, cols: 1, color: "#3a1879"},
    ];

    this.textPostService.getTextPosts().subscribe(response => {
      this.textPost = response;

      let index = 0;

      this.textPost.forEach(element => {                       
        let tileObject = { text: element.content, cols: positionArray[index].cols, rows: positionArray[index].rows, color: positionArray[index].color }                        
        this.tiles2.push(tileObject);
        (index >= positionArray.length? index = 0 : index = index + 1);
      });
    })
  }

}
