import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideEffects } from "@ngrx/effects";

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { ProductsEffects } from "./store/effects/products.effects";
import * as fromReducers from './store/reducers/product.reducers';
import { appReducers } from "./store/state/products.state";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { ListsEffects } from "./store/effects/lists.effects";
import { getProduct } from "./store/reducers/product.reducers";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({
      products: getProduct,
      // ingredients: getIngredients//todo
    }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideEffects(ProductsEffects,ListsEffects),
    provideStore(appReducers),//getProduct || productReducers
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
