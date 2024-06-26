import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BigButtonComponent } from './big-button/big-button.component';
import { InformationComponent } from './information/information.component';
import { MatCardModule } from '@angular/material/card';
import { InformationCardComponent } from './information-card/information-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InformationDialogComponent } from './information-dialog/information-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { TravelRouteComponent } from './travel-route/travel-route.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { CategoriesComponent } from './categories/categories.component';
import { RegionsComponent } from './regions/regions.component';
import { MatTableModule } from '@angular/material/table';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    HomeComponent,
    BigButtonComponent,
    InformationComponent,
    InformationCardComponent,
    InformationDialogComponent,
    TravelRouteComponent,
    CategoriesComponent,
    RegionsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
