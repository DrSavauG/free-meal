import { Routes } from '@angular/router';

import { BodyComponent } from "./components/body/body.component";
import { BigBodyComponent } from "./components/big-body/big-body.component";
import { ListRecipesComponent } from "./components/list-recipes/list-recipes.component";

export const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'id', component: BigBodyComponent},
  {path: 'items/:letter', component: ListRecipesComponent},
  {path: 'item/:id', component: BigBodyComponent}
];
