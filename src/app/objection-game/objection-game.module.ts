import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObjectionGameComponent} from './objection-game.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ObjectionGameModule { }

export const paths = [
  {path: 'game', component: ObjectionGameComponent}
];
