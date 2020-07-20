import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuideComponent} from './guide.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GuideModule { }

export const paths = [
  {path: 'guide', component: GuideComponent}
];
