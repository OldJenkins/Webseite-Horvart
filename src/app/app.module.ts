import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from'angularfire2/firestore';
import { environment } from '../environments/environment';
import { UserService } from './services/user.service';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ImagepostService } from './services/imagepost.service';
import { VideopostService } from './services/videopost.service';
import { TextpostService } from './services/textpost.service';
import { MaincontainerComponent } from './components/maincontainer/maincontainer.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageSiteComponent } from './components/image-site/image-site.component';
import { VideoSiteComponent } from './components/video-site/video-site.component';
import { TextSiteComponent } from './components/text-site/text-site.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    AddItemComponent,
    MaincontainerComponent,
    ContentComponent,
    FooterComponent,
    ImageSiteComponent,
    VideoSiteComponent,
    TextSiteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    
  ],
  providers: [UserService,ImagepostService,VideopostService,TextpostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
