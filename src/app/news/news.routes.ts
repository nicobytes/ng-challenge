import { Routes } from '@angular/router';
import { LayoutComponent } from '@news/layout/layout.component';
import { loadGuard } from '@news/guard/load.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        canActivate: [loadGuard],
        loadComponent: () => import('@news/pages/home/home.component'),
      },
      {
        path: ':url',
        canActivate: [loadGuard],
        loadComponent: () => import('@news/pages/home/home.component'),
      },
    ],
  },
];
