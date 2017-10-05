import { Router } from '@angular/router';
import { HeroService } from '../shared/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  selectedHero:Hero;

  heroes:Hero[];

  constructor(private heroService: HeroService,
              private router:Router) {

   }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes()
                    .then(heroes => {
                      this.heroes = heroes;
                    })
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

}

export class Hero{
  id: number;
  name: string;
}
