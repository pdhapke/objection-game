import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RulesAndReferenceComponent} from './rules-and-reference.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RulesAndReferenceModule { }

export const paths = [
  {path: 'reference', component: RulesAndReferenceComponent}
];
