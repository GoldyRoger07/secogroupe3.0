import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '',redirectTo: 'home', pathMatch: 'full' },
    { path: '', loadComponent: ()=> import('./pages/home-page/home-page')  },
    { path: 'home2', loadComponent: ()=> import('./pages/homepage2/homepage2'), pathMatch: 'full'  },
    { path: 'services', loadComponent: ()=> import('./pages/services/services'), pathMatch: 'full'  },
    // { path: 'about-us', loadComponent: ()=> import('./pages/about-us/about-us'), pathMatch: 'full'  },
    { path: 'contact', loadComponent: ()=> import('./pages/contact/contact') , pathMatch: 'full' },
    { path: 'about-us', loadComponent: ()=> import('./pages/mission/mission') , pathMatch: 'full' },
    { path: 'services-country/:pays', loadComponent: ()=> import('./pages/services-country/services-country') , pathMatch: 'full'},
    { path: 'cookie-policy', loadComponent: ()=> import('./pages/cookie-policy/cookie-policy') , pathMatch: 'full'},
    { path: 'privacy-policy', loadComponent: ()=> import('./pages/privacy-policy/privacy-policy') , pathMatch: 'full'},
    { path: 'terms-of-service', loadComponent: ()=> import('./pages/terms-of-service/terms-of-service') , pathMatch: 'full'}

    // { path: '**', redirectTo: '/notfound' }
];
