import 'rxjs/add/operator/switchMap';
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html', 
  styleUrls: ['hero-detail.component.css'],
  providers: [ HeroService ]
})

export class HeroDetailComponent implements OnInit {
  @Input()
  hero : Hero;
  races : string[];
  isDestroyed : boolean = false;
  timer : any;

  constructor(
    private heroService : HeroService, 
    private route : ActivatedRoute, 
    private location : Location,
    private router : Router
  ) {}

  ngOnInit() : void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
    this.getRaces();
  }

  ngOnDestroy() : void {
    this.destroyUndo();
  }

  getRaces() : void {
    this.heroService.getRaces()
      .then(races => this.races = races);
  }

  destroy() : void {
    this.heroService.destroy(this.hero);
  }

  destroyUndo() : void {
    clearInterval(this.timer);
  }

  /** 
   * If user click on destroy button, the variable isDestroyed is set
   * to true. 
   *
   * True => start the timer and wait 5 seconds before destroying 
   * False => user clicked undo, clear the interval so no destroy
   * happens
  */
  toggleDestroy() : void {
    this.isDestroyed = !this.isDestroyed;

    if (this.isDestroyed) { 
      this.timer = setInterval(() => {
        this.destroy();
        this.router.navigate(['dashboard']);
      }, 4500);
    } else {
      this.destroyUndo();
    }
  }

  goBack() : void {
    this.location.back();
  }
}
