import {Pipe, PipeTransform} from '@angular/core';
import {Hero} from '../types/hero';

@Pipe({name: 'heroSummary'})
export class HeroSummaryPipe implements PipeTransform {

  transform(hero: Hero, ...args: any[]): number {
    const heroProps = Object.keys(hero);
    let summary = 0;

    for (const prop of heroProps) {
      if (prop === 'power' || prop === 'intelligence' || prop === 'reflex') {
        summary += +hero[prop];
      }
    }
    return summary / 3;
  }
}
