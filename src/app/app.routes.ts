import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'servicios',
        loadComponent: () =>
          import('./services/services.component').then(m => m.ServicesComponent),
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./contact/contact.component').then(m => m.ContactComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
