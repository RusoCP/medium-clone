import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {appRoutes} from './app/app.routes';
import {provideState, provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {isDevMode} from '@angular/core';
import {authFetureKey, authReducer} from './app/auth/store/reducers';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {provideEffects} from '@ngrx/effects';
import * as authEffects from './app/auth/store/effects';
import {provideRouterStore, routerReducer} from '@ngrx/router-store';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideState(authFetureKey, authReducer),
    provideEffects(authEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
  ],
});
