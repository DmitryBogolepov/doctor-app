import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PoliticsComponent } from './politics/politics.component';
import { ServicesComponent } from './services/services.component';
import {MainComponent} from './main/main.component';

export const PAGES_ROUTES: Routes = [
  { path: '', component:MainComponent},
  { path: 'about', component: AboutComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'services', component: ServicesComponent },
];
