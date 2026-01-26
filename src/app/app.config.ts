import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimatedIcons } from 'ng-animated-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimatedIcons({ color: 'blue', size: 30, strokeWidth: 3 }),
    provideRouter(routes),
  ],
};
