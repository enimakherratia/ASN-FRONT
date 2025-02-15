import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { errorHandlingInterceptor } from '@myproject/core/error-handler';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { API_URL } from '@myproject/core/http-client';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full',
        },
        {
          path: 'home',
          loadComponent: () => import('@myproject/home/feature-home').then((m) => m.HomeComponent),
        },
        {
          path: 'login',
          loadComponent: () => import('@myproject/auth/feature-auth').then((m) => m.LoginComponent),
        },
        {
          path: 'register',
          loadComponent: () => import('@myproject/auth/feature-auth').then((m) => m.RegisterComponent),
        },
        {
          path: 'settings',
          loadComponent: () =>
            import('@myproject/settings/feature-settings').then((settings) => settings.SettingsComponent),
        }
      ],
      withViewTransitions(),
      withComponentInputBinding(),
    ),
    provideHttpClient(withInterceptors([errorHandlingInterceptor])),
    { provide: API_URL, useValue: environment.api_url },
  ],
};
