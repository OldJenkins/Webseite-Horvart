import { Component, OnInit } from '@angular/core';
import { AdminInformationService } from 'src/app/services/admin-information.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private adminService: AdminInformationService) { }

  ngOnInit(): void {
  }

  onLoginClicked() {
    this.adminService.setIsInAdminMode(true);
  }
}
