import { Routes } from '@angular/router';

import { BodyComponent } from "./components/body/body.component";
import { BigBodyComponent } from "./components/big-body/big-body.component";


export const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'old-path', redirectTo: ''},
  {path: 'id', component: BigBodyComponent},
  {
    path: 'items/:letter',
    loadComponent: () =>
      import('./components/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {path: 'item/:id', component: BigBodyComponent},
  {path: '**', component: BodyComponent},
];
