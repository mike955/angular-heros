import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../shared/hero.service';
import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero:Hero;

  constructor(
    private heroService:HeroService,
    private route:ActivatedRoute,
    private location: Location
  ) { 
    
  }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

  goBack():void{
    this.location.back()
  }

  save():void{
    this.heroService.update(this.hero)
        .then(() => this.goBack())
  }
  
}

export class Hero{
  id:number;
  name:string;
}