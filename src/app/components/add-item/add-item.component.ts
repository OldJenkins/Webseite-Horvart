import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  user: User ={
    name: '',
    mail: ''
  }

  onSubmit(): void{
    
    if(this.user.name != '' && this.user.mail != ''){
      this.userService.addUser(this.user);
      this.user.name = '';
      this.user.mail = '';
    }else{
      alert("insert valid input please");
    }
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
