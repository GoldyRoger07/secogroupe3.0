import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '',redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: ()=> import('./pages/home-page/home-page') },
    { path: 'home2', loadComponent: ()=> import('./pages/homepage2/homepage2') },
    { path: 'services', loadComponent: ()=> import('./pages/services/services') },
    { path: 'about-us', loadComponent: ()=> import('./pages/about-us/about-us') },
    { path: 'contact', loadComponent: ()=> import('./pages/contact/contact') }
    // { path: '**', redirectTo: '/notfound' }
];
