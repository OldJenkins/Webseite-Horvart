import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminInformationService {

  isAdminLoggedIn: BehaviorSubject<boolean>;

  //Benutzer ist eingeloggt - aber kein Admin
  isUserLoggedIn: BehaviorSubject<boolean>;



  constructor() {
    this.isAdminLoggedIn = new BehaviorSubject<boolean>(false);
    this.isUserLoggedIn = new BehaviorSubject<boolean>(false);
  }

  getIsUserLoggedIn(): Observable<boolean> {
    return this.isUserLoggedIn;
  }

  getIsAdminLoggedIn(): Observable<boolean> {
    return this.isAdminLoggedIn;
  }

  setIsUserLoggedIn(userIsLoggedIn: boolean) {
    this.isUserLoggedIn.next(userIsLoggedIn);
  }

  setIsAdminLoggedIn(isAdminLoggedIn: boolean) {
    this.isAdminLoggedIn.next(isAdminLoggedIn);
  }

}
