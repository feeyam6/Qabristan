import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    //provideServerRoutesConfig(serverRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
