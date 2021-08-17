import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { TravelRouteComponent } from './travel-route/travel-route.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'information', component: InformationComponent},
  { path: 'travel-route', component: TravelRouteComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
