import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CardComponent } from './components/./card/card.component';
import { CropperComponent } from './components/./cropper/cropper.component';
import { ImageSiteComponent } from './components/./image-site/image-site.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagepostService } from './services/imagepost.service';
import { VideopostService } from './services/videopost.service';
import { TextpostService } from './services/textpost.service';
import { MaincontainerComponent } from './components/maincontainer/maincontainer.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoSiteComponent } from './components/video-site/video-site.component';
import { TextSiteComponent } from './components/text-site/text-site.component';
import { MatVideoModule } from 'mat-video';
import { HomeComponent } from './components/home/home.component';
import { AdminInformationService } from './services/admin-information.service';
import { UserProfileComponent } from './components//user-profile/user-profile.component';
import { AuthentificationService } from './services/authentification.service';
import { DialogComponent } from './components/image-site/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { VideoDialogComponent } from './components/video-site/video-dialog/video-dialog.component';
import { TextDialogComponent } from './components/text-site/text-dialog/text-dialog.component';
import { ImpressumComponent } from './components/impressum/impressum.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CardComponent,
    CropperComponent,
    ImageSiteComponent,
    NavbarComponent,
    MaincontainerComponent,
    FooterComponent,
    VideoSiteComponent,
    TextSiteComponent,
    HomeComponent,
    UserProfileComponent,
    DialogComponent,
    VideoDialogComponent,
    TextDialogComponent,
    ImpressumComponent
  ],

  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatGridListModule,
    BrowserAnimationsModule,
    FormsModule,
    ImageCropperModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    MatVideoModule,
    MatDialogModule
  ],

  providers: [ImagepostService, VideopostService, TextpostService, AdminInformationService, AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }