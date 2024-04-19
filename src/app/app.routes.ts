import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () => import('@news/pages/home/home.component'),
  // },
  {
    path: '',
    loadChildren: () => import('@news/news.routes').then(m => m.routes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
