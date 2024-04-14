import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sector-a',
    loadChildren: () => import('./sector-a/sector-a.module').then( m => m.SectorAPageModule)
  },
  {
    path: 'cams',
    loadChildren: () => import('./cams/cams.module').then( m => m.CamsPageModule)
  },
  {
    path: 'sector-b',
    loadChildren: () => import('./sector-b/sector-b.module').then( m => m.SectorBPageModule)
  },
  {
    path: 'conf',
    loadChildren: () => import('./conf/conf.module').then( m => m.ConfPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
