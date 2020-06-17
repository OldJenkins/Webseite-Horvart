import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminInformationService {

  isAdminLoggedIn: BehaviorSubject<boolean>;


  constructor() {
    this.isAdminLoggedIn = new BehaviorSubject<boolean>(true);
  }

  getIsAdminLoggedIn(): Observable<boolean> {
    return this.isAdminLoggedIn;
  }

  setIsAdminLoggedIn(isAdminLoggedIn: boolean) {
    this.isAdminLoggedIn.next(isAdminLoggedIn);
  }

}
