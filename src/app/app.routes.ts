import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: '',
    loadComponent: () => import('../pages/home/home.component').then(m => m.HomeComponent),

  }, {
    path: 'posts',
    loadChildren: () => import('../pages/posts/posts.routes').then(m => m.ROUTES),
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }];