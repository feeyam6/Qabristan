import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    //provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(AppRoutingModule),
  ],
};
