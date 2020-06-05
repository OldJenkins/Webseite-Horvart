import { Component, OnInit } from '@angular/core';
import { User } from'../../models/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  editState: boolean = false;
  userToEdit: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteItem(event, user: User){
    this.closeItem();
    this.userService.deleteUser(user);
  }

  editItem(event, user: User){
    this.editState = true;
    this.userToEdit = user;
  }

  updateUser(user: User){
    this.userService.updateUser(user);
    this.closeItem();

  }

  closeItem(){
    this.editState = false;
  }

}
