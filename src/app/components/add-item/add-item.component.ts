import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  user: User = {
    displayName: '',
    email: ''
  }

  onSubmit(): void {

    if (this.user.displayName != '' && this.user.email != '') {
      this.userService.addUser(this.user);
      this.user.displayName = '';
      this.user.email = '';
    } else {
      alert("insert valid input please");
    }
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
