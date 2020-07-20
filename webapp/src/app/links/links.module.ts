import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinksComponent} from './links.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LinksModule { }

export const paths = [
  {path: 'links', component: LinksComponent}
];
