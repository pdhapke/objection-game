import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import paths from './app-paths';

@NgModule({
  imports: [
    RouterModule.forRoot(paths)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
