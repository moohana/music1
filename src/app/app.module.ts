import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavouriteComponent } from './favourite/favourite.component';

import { MusicService } from "./music.service";
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component'; //JS IMOPRT



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FavouriteComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }