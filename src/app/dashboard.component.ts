import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [HeroService]
})

export class DashboardComponent implements OnInit {

  title: string = 'Dashboard';
  description: string = 'Latest hot heroes!';
  heroesTopAllkind: Hero[];
  heroesTopHumans: Hero[];
  heroesTopOrcs: Hero[];
  heroesTopUndeads: Hero[];
  heroesTopElfs: Hero[];

  constructor(
    private heroService: HeroService, 
    private router : Router
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroesTopAllkind = heroes.slice(8, 12));
    this.heroService.getHeroesByRace('human')
      .then(heroes => this.heroesTopHumans = heroes.slice(0, 2));
    this.heroService.getHeroesByRace('orc')
      .then(heroes => this.heroesTopOrcs = heroes.slice(0, 2));
    this.heroService.getHeroesByRace('undead')
      .then(heroes => this.heroesTopUndeads = heroes.slice(0, 2));
    this.heroService.getHeroesByRace('elf')
      .then(heroes => this.heroesTopElfs = heroes.slice(0, 2));
  }

  gotoHeroesRace(race : string) : void {
    this.router.navigate(['heroes', race]);
  }

}