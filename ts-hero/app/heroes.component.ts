import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html'
  styleUrls: ['app/heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
