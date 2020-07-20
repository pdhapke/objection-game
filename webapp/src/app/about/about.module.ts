import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from './about.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }


export const paths = [
  {path: 'about', component: AboutComponent}
];
