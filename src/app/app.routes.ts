import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes-list',
    pathMatch: 'full',
  },
  {
    path: 'crisis-list',
    title: 'Crisis List',
    component: CrisisListComponent,
  },
  {
    path: 'heroes-list',
    title: 'Heroes List',
    component: HeroesListComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
