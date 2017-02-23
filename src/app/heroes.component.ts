import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroDetailComponent }  from './hero-detail.component';
import {Hero} from './hero';
import {HEROES} from './hero-mock';
import {HeroService} from './hero.service'

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [ HeroService ]
})

export class HeroesComponent implements OnInit { 

  title: string = 'Heroes';
  description: string = 'The list of all heroes available';
  selectedHero: Hero;
  heroes : Hero[];

  constructor(
    private router : Router,
    private heroService : HeroService
  ) {}

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().
      then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail() : void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
