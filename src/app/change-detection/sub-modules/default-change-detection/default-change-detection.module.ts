import {NgModule} from '@angular/core';
import {DefaultChangeDetectionComponent} from './default-change-detection.component';
import {ComponentOne} from './component-one';
import {ComponentTwo} from './component-two';
import {ComponentThree} from './component-three';
import {ComponentFour} from './component-four';
import {ComponentFive} from './component-five';
import {ComponentSix} from './component-six';
import {ComponentSeven} from './component-seven';
import {MatButtonModule} from '@angular/material';

@NgModule({
    declarations: [
        DefaultChangeDetectionComponent,
        ComponentOne,
        ComponentTwo,
        ComponentThree,
        ComponentFour,
        ComponentFive,
        ComponentSix,
        ComponentSeven
    ],
  imports:[
    MatButtonModule
  ]
})
export class DefaultChangeDetectionModule {

}
