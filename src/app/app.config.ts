import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '@env/environment';

import { routes } from './app.routes';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { NewsEffects } from '@core/store/news.effect';
import { reducers } from '@core/store/index';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        let url = `${environment.CDN_IMAGES}${config.src}/50q`;
        if (config.width) {
          url = `${url}/${config.width}w`;
        }
        return url;
      },
    },
    provideStore(reducers),
    provideEffects([NewsEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideClientHydration(),
  ],
};
