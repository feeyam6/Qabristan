import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequireAuthComponent } from './require-auth/require-auth.component';
import { authGuard } from './guards/auth/auth.guard';

// const routes: Routes = [
//   { path: '', component: DashboardComponent },
//   { path: 'signin', component: SigninComponent },
//   {
//     path: 'require-auth',
//     component: RequireAuthComponent,
//     canActivate: [authGuard],
//   },
// ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
