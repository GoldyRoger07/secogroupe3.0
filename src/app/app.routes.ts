import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '',redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: ()=> import('./pages/home-page/home-page'), pathMatch: 'full'  },
    { path: 'home2', loadComponent: ()=> import('./pages/homepage2/homepage2'), pathMatch: 'full'  },
    { path: 'services', loadComponent: ()=> import('./pages/services/services'), pathMatch: 'full'  },
    // { path: 'about-us', loadComponent: ()=> import('./pages/about-us/about-us'), pathMatch: 'full'  },
    { path: 'contact', loadComponent: ()=> import('./pages/contact/contact') , pathMatch: 'full' },
    { path: 'about-us', loadComponent: ()=> import('./pages/mission/mission') , pathMatch: 'full' }
    // { path: '**', redirectTo: '/notfound' }
];
