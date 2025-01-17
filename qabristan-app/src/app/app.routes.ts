import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequireAuthComponent } from './require-auth/require-auth.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }, // Redirect empty path to login
  // Additional routes will go here as you expand the app
  { path: 'signin', component: SigninComponent }, // Wildcard route for 404 - redirects to login
  { path: 'require-auth', component: RequireAuthComponent },
  { path: '**', redirectTo: '/' }, // Wildcard route for 404 - redirects to login
];
