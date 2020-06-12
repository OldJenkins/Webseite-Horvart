import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminInformationService {

  isAdminLoggedIn: boolean = false;


  constructor() { }

  toggleAdminMode() {
    this.isAdminLoggedIn != this.isAdminLoggedIn;
  }

  getIsInAdminMode(): boolean {
    return this.isAdminLoggedIn;
  }

  setIsInAdminMode(isInAdminMode): void {
    this.isAdminLoggedIn = isInAdminMode;
  }

}
