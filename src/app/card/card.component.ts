import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  isAdmin = false;

  ngOnInit(){
    if(this.isAdmin){
      this.showThis();
    }else{
      this.dontShowThis();
    }
  }

  showThis(){

  }

  dontShowThis(){

  }


}