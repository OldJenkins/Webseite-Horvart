import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoSiteComponent } from './components/video-site/video-site.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { GridComponent } from './components/grid/grid.component';
import { SecondgridComponent } from './components/secondgrid/secondgrid.component';
import { ImpressumComponent } from './components/impressum/impressum.component';


const routes: Routes = [
  { path: 'Texts', component: SecondgridComponent },
  { path: 'Images', component: GridComponent },
  { path: 'Videos', component: VideoSiteComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'Login', component: UserProfileComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Impressum', component: ImpressumComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }