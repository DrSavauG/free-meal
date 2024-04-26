import { Routes } from '@angular/router';

import { PageType } from "./constants/enums";
import { BodyComponent } from "./components/body/body.component";
import { DescriptionComponent } from "./layouts/description/description.component";


export const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'old-path', redirectTo: ''},
  {path: `${PageType.Id}`, component: DescriptionComponent},
  {
    path: `${PageType.Items}/:${PageType.Items}`,
    loadComponent: () =>
      import('./layouts/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: `${PageType.Category}/:${PageType.Category}`,
    loadComponent: () =>
      import('./layouts/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: `${PageType.Area}/:${PageType.Area}`,
    loadComponent: () =>
      import('./layouts/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: `${PageType.Ingredient}/:${PageType.Ingredient}`,
    loadComponent: () =>
      import('./layouts/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: `${PageType.Favorites}`,
    loadComponent: () =>
      import('./layouts/list-recipes/list-recipes.component').then(
        (mod) => mod.ListRecipesComponent)
  },
  {
    path: `${PageType.Categories}`,
    loadComponent: () =>
      import('./layouts/categories/categories.component').then(
        (mod) => mod.CategoriesComponent)
  },
  {
    path: `${PageType.Areas}`,
    loadComponent: () =>
      import('./layouts/categories/categories.component').then(
        (mod) => mod.CategoriesComponent)
  },
  {
    path: `${PageType.Ingredients}`,
    loadComponent: () =>
      import('./layouts/categories/categories.component').then(
        (mod) => mod.CategoriesComponent)
  },
  {path: `${PageType.Item}/:${PageType.Id}`, component: DescriptionComponent}
  // {path: '**', component: BodyComponent},//todo вернуть все адреса
];
