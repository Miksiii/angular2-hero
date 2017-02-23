import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
    private route : ActivatedRoute,
    private location : Location,
    private heroService : HeroService
  ) {}

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().
      then(heroes => this.heroes = heroes);
  }

  getHeroesByRace(race : string): void {
    this.heroService.getHeroesByRace(race).
      then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      let paramRace : string = params['race'];

      if (paramRace === undefined) {
        this.getHeroes();
      } else {
        this.title = 'Heroes of ' + paramRace + '\'s';
        this.getHeroesByRace(paramRace);
      }
    });
  }

  gotoDetail() : void {
    console.log('dsadad'  + this.selectedHero);
    this.router.navigate(['heroes/detail', this.selectedHero.id]);
  }

  goBack() : void {
    this.location.back();
  }

}
