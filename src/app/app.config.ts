import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as BookEffect from './ngrx/book/book.effects';
import {bookReducer} from "./ngrx/book/book.reducers";
import {provideHttpClient, HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideStore(
        {
          book: bookReducer,
        }
    )
    , provideEffects(BookEffect)
      , provideHttpClient(), provideAnimationsAsync()]
};
