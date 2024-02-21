import { Routes } from '@angular/router';

import { PageType } from "./components/enums/enums";
import { BodyComponent } from "./components/body/body.component";
import { BigBodyComponent } from "./components/big-body/big-body.component";


export const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'old-path', redirectTo: ''},
  {path: `${PageType.Id}`, component: BigBodyComponent},
  {
    path: `${PageType.Items}/:${PageType.Items}`,
    loadComponent: () =>
      import('./components/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: `${PageType.Category}/:${PageType.Category}`,
    loadComponent: () =>
      import('./components/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: `${PageType.Area}/:${PageType.Area}`,
    loadComponent: () =>
      import('./components/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: `${PageType.Ingredient}/:${PageType.Ingredient}`,
    loadComponent: () =>
      import('./components/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: `${PageType.Favorites}`,
    loadComponent: () =>
      import('./components/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: `${PageType.Categories}`,
    loadComponent: () =>
      import('./components/categories/categories.component').then(
        (mod) => mod.CategoriesComponent)
  },
  {
    path: `${PageType.Areas}`,
    loadComponent: () =>
      import('./components/categories/categories.component').then(
        (mod) => mod.CategoriesComponent)
  },
  {
    path: `${PageType.Ingredients}`,
    loadComponent: () =>
      import('./components/categories/categories.component').then(
        (mod) => mod.CategoriesComponent)
  },
  {path: `${PageType.Item}/:${PageType.Id}`, component: BigBodyComponent},
  {path: '**', component: BodyComponent},
];
