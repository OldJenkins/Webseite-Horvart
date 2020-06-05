import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextSiteComponent } from './components/text-site/text-site.component';
import { ImageSiteComponent } from './components/image-site/image-site.component';
import { VideoSiteComponent } from './components/video-site/video-site.component';
import { UsersComponent } from './components/users/users.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  { path:'Texts', component: TextSiteComponent},
  { path:'Images', component: ImageSiteComponent},
  { path:'Users', component: UsersComponent},
  { path:'Videos', component: VideoSiteComponent},
  { path: 'carousel', component: CarouselComponent},
  { path:'**', component: VideoSiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }