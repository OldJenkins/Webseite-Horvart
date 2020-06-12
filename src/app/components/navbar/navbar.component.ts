import { Component, OnInit } from '@angular/core';
import { AdminInformationService } from 'src/app/services/admin-information.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private adminService: AdminInformationService) { }
  isInAdminMode: boolean = false;

  ngOnInit(): void {
    this.adminService.getIsAdminLoggedIn().subscribe(value => {
      this.isInAdminMode = value;
    })
  }

  onLogoutClicked() {
    this.adminService.setIsAdminLoggedIn(false);
  }

  onLoginClicked() {
    this.adminService.setIsAdminLoggedIn(true);
  }
}
