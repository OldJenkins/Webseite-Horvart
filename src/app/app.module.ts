import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CardComponent } from './components/./card/card.component';
import { CropperComponent } from './components/./cropper/cropper.component';
import { GridComponent } from './components/./grid/grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { TestnormanComponent } from './components/testnorman/testnorman.component';
import { TestlunaComponent } from './components/testluna/testluna.component';
import { TestmarcelComponent } from './components/testmarcel/testmarcel.component';
import { SecondgridComponent } from './secondgrid/secondgrid.component';

import { MatVideoModule } from 'mat-video';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CardComponent,
    CropperComponent,
    GridComponent,
    UsersComponent,
    NavbarComponent,
    AddItemComponent,
    MaincontainerComponent,
    ContentComponent,
    FooterComponent,
    ImageSiteComponent,
    VideoSiteComponent,
    TextSiteComponent,
    TestnormanComponent,
    TestlunaComponent,
    TestmarcelComponent,
    SecondgridComponent
    
  ],
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
    MatVideoModule
  ],
  providers: [UserService,ImagepostService,VideopostService,TextpostService],
  bootstrap: [AppComponent]
})
export class AppModule { }