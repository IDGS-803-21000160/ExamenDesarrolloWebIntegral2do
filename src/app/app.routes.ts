import { Routes } from '@angular/router';
import { MainPageComponent } from './product-gallery/main-page/main-page.component';
import { WelcomePageComponent } from './home-page/welcome-page/welcome-page.component';
import { MainPageContactComponent } from './contact/main-page-contact/main-page-contact.component';

export const routes: Routes = [
  { path: 'products', component: MainPageComponent },
  { path: 'homePage', component: WelcomePageComponent },
  { path: 'contact', component: MainPageContactComponent },
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
];
