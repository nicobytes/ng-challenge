import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./news/page/page.component')
  },
  {
    path: '**',
    redirectTo: '',
  },
];
