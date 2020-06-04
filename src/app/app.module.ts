import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { LoginComponent} from '.layout/login/login.component'; */
import { LoginComponent } from './layout/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyCc8JqRzEwRobtPrs1dZhA6mows8zGka7k",
  authDomain: "webseite-horvart.firebaseapp.com",
  databaseURL: "https://webseite-horvart.firebaseio.com",
  projectId: "webseite-horvart",
  storageBucket: "webseite-horvart.appspot.com",
  messagingSenderId: "111946545193",
  appId: "1:111946545193:web:4e62fc426065a61c6d8438",
  measurementId: "G-XQMXTYZ8H5"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(AIzaSyCc8JqRzEwRobtPrs1dZhA6mows8zGka7k)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
