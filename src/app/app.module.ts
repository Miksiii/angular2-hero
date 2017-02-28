import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroCreateComponent } from './hero-create.component';

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HeroDetailComponent, 
    HeroesComponent, 
    DashboardComponent, 
    HeroCreateComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
