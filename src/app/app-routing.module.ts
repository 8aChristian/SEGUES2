import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
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
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: '',
    redirectTo: 'select',
    pathMatch: 'full'
  },
  {
    path: 'sector-a-user',
    loadChildren: () => import('./sector-a-user/sector-a-user.module').then( m => m.SectorAUserPageModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./manual/manual.module').then( m => m.ManualPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
