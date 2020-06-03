import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { LoginComponent} from '.layout/login/login.component'; */
import { LoginComponent } from './layout/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(PUT_YOUR_FIREBASE_API_KEY_HERE)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
