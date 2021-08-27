import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { RegionsComponent } from './regions/regions.component';
import { TravelRouteComponent } from './travel-route/travel-route.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'information', component: InformationComponent},
  { path: 'travel-route', component: TravelRouteComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'regiones', component: RegionsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
