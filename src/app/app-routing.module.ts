import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/home').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/').then(m => m.AuthModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
