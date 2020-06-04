import { Component, OnInit } from '@angular/core';
import { TextPost } from'../../models/TextPost';
import { TextpostService } from 'src/app/services/textpost.service';

@Component({
  selector: 'app-text-site',
  templateUrl: './text-site.component.html',
  styleUrls: ['./text-site.component.css']
})
export class TextSiteComponent implements OnInit {

  texts: TextPost[];
  editState: boolean = false;
  textToEdit: TextPost;

  constructor(private textpostService: TextpostService) { }

  ngOnInit(): void {
    this.textpostService.getTextPosts().subscribe(texts => {
      this.texts = texts;
    });
  }

  deleteItem(event, textpost: TextPost){
    this.closeItem();
    this.textpostService.deleteTextpost(textpost);
  }

  editItem(event, textpost: TextPost){
    this.editState = true;
    this.textToEdit = textpost;
  }

  updateText(textpost: TextPost){
    this.textpostService.updateTextpost(textpost);
    this.closeItem();
  }

  closeItem(){
    this.editState = false;
  }

}
