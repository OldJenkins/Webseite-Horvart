import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminInformationService {

  isAdminLoggedIn: BehaviorSubject<boolean>;


  constructor() {
    this.isAdminLoggedIn = new BehaviorSubject<boolean>(false);
  }

  getIsAdminLoggedIn(): Observable<boolean> {
    return this.isAdminLoggedIn;
  }

  setIsAdminLoggedIn(isAdminLoggedIn: boolean) {
    this.isAdminLoggedIn.next(isAdminLoggedIn);
  }

}
