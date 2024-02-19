import { Routes } from '@angular/router';

import { BodyComponent } from "./components/body/body.component";
import { BigBodyComponent } from "./components/big-body/big-body.component";


export const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'old-path', redirectTo: ''},
  {path: 'id', component: BigBodyComponent},
  {
    path: 'items/:items',
    loadComponent: () =>
      import('./components/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: 'category/:category',
    loadComponent: () =>
      import('./components/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: 'area/:area',
    loadComponent: () =>
      import('./components/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: 'ingredient/:ingredient',
    loadComponent: () =>
      import('./components/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./components/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./components/categories/categories.component').then(
        (mod) => mod.CategoriesComponent)
  },
  {
    path: 'areas',
    loadComponent: () =>
      import('./components/areas/areas.component').then(
        (mod) => mod.AreasComponent)
  },
  {
    path: 'ingredients',
    loadComponent: () =>
      import('./components/ingredients/ingredients.component').then(
        (mod) => mod.IngredientsComponent)
  },
  {path: 'item/:id', component: BigBodyComponent},
  {path: '**', component: BodyComponent},
];
