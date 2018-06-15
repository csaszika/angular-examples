import {Component, OnInit} from '@angular/core';
import {Hero} from '../types/hero';

@Component({
  selector: 'app-ng-template-outlet-container',
  templateUrl: './ng-template-outlet-container.component.html',
  styleUrls: ['./ng-template-outlet-container.component.scss']
})
export class NgTemplateOutletContainerComponent implements OnInit {

  // can be an @Input
  mode: 'up' | 'down' = 'up';
  heroes: Hero[] = [
    {name: 'captain america', intelligence: 4, power: 6, reflex: 7, logo: 'assets/captain_america.svg'},
    {name: 'green lantern', intelligence: 5, power: 7, reflex: 7, logo: 'assets/green_lantern.png'},
    {name: 'deadpool', intelligence: 6, power: 7, reflex: 8, logo: 'assets/deadpool.png'},
    {name: 'ironman', intelligence: 9, power: 6, reflex: 7, logo: 'assets/ironman.svg'},
    {name: 'thor', intelligence: 6, power: 8, reflex: 6, logo: 'assets/thor.png'},
    {name: 'captain marvel', intelligence: 8, power: 8, reflex: 6, logo: 'assets/captain_marvel.png'},
    {name: 'black panther', intelligence: 8, power: 7, reflex: 9, logo: 'assets/black_panther.png'},
    {name: 'spiderman', intelligence: 7, power: 6, reflex: 9, logo: 'assets/spiderman.png'},
    {name: 'dr strange', intelligence: 8, power: 5, reflex: 5, logo: 'assets/dr_strange.png'},
    {name: 'hulk', intelligence: 3, power: 9, reflex: 7, logo: 'assets/hulk.png'}];

  constructor() { }

  ngOnInit() {
  }

  changeTemplate() {
    this.mode = this.mode === 'up' ? 'down': 'up';
  }
}
