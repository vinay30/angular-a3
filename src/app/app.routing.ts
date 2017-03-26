import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { FoodListComponent }      from './app.foodlistcomponent';
import { DetailsComponent }      from './app.detailscomponent';
import { AboutComponent }        from './app.aboutcomponent';

const appRoutes: Routes = [
  { path: 'home', component: FoodListComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
