import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasicInfoComponent} from './basic-info.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BasicInfoModule { }

export const paths = [
  {path: 'basics', component: BasicInfoComponent}
];

