import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroCreateComponent }  from './hero-create.component';

const ROUTES : Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  }, 
  {
    path: 'dashboard',
    component: DashboardComponent
  }, 
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes/detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes/:race',
    component: HeroesComponent
  },
  {
    path: 'create', 
    component: HeroCreateComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES)], 
  exports: [ RouterModule ]
})

export class AppRoutingModule {
  
}