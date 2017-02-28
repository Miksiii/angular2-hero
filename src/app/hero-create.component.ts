import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import {HeroService } from './hero.service'

@Component({
  moduleId: module.id,
  selector: 'hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['hero-create.component.css'],
  providers: [ HeroService ]
})

export class HeroCreateComponent implements OnInit {
  hero : Hero;
  races : string[];
  title : string = "Create new hero";
  description: string = "Add new super heroes to the world";
  submitted : boolean = false;

  constructor(
    private heroService : HeroService, 
  ) {}

  ngOnInit() : void {
    this.getRaces();
    this.hero = new Hero(111, '', 'human');
  }

  getRaces() : void {
    this.heroService.getRaces()
      .then(races => this.races = races);
  }

  onCreateHero() : void {
    this.toggleForm();
    this.heroService.createHero(this.hero);
    this.resetFormFields();
  }

  resetFormFields() : void {
    this.hero = new Hero(112, '', 'human');
  }

  toggleForm() : void {
    this.submitted = !this.submitted;
  }
}
