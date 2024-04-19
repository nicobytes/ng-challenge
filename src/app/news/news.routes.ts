import { Routes } from '@angular/router';
import { LayoutComponent } from '@news/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@news/pages/home/home.component'),
      },
      {
        path: ':url',
        loadComponent: () => import('@news/pages/home/home.component'),
      },
    ],
  },
];
