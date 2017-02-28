import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './hero-mock';
import { RACES } from './hero-mock';

@Injectable()
export class HeroService {

  getHeroes() : Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    })
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroesByRace(race: string): Promise<Hero[]> {
    return this.getHeroes()
             .then(heroes => heroes.filter(hero => hero.race === race));
  }

  getRaces(): Promise<string[]> {
    return Promise.resolve(RACES);
  }

  createHero(newHero : Hero) : void {
     console.log(newHero);
     console.log(HEROES);
     HEROES.push(newHero);
  }

}