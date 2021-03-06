import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Hero} from '../types/hero';

@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() cardTemplate: TemplateRef<{hero: Hero}>;
  @Input() hero: Hero;

  constructor() {

  }

  ngOnInit() {
  }

}
