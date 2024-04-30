import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";

import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { ProductsEffects } from "./store/effects/products.effects";
import { appReducers } from "./store/state/products.state";
import { ListsEffects } from "./store/effects/lists.effects";
import { IngredientsEffects } from "./store/effects/ingredients.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideEffects(ProductsEffects,ListsEffects,IngredientsEffects),
    provideStore(appReducers),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
