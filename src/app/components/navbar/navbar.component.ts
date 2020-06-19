import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AdminInformationService } from 'src/app/services/admin-information.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import * as M from 'materialize-css/dist/js/materialize'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(private adminService: AdminInformationService, public auth: AuthentificationService) { }

  isInAdminMode: boolean;

  ngOnInit(): void {
    this.adminService.getIsAdminLoggedIn().subscribe(value => {
      this.isInAdminMode = value;
    })
  }

  // Used for the Burger Menu
  ngAfterViewInit() {
    setTimeout(function () {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem, 'edge');
    }, 0)
  }

  onLogoutClicked() {
    this.adminService.setIsAdminLoggedIn(false);
  }

  onLoginClicked() {
    this.adminService.setIsAdminLoggedIn(true);
  }
}
