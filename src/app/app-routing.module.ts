import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PageComponent} from "./news/page/page.component";

const routes: Routes = [
  {
    component: PageComponent,
    path: '',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
