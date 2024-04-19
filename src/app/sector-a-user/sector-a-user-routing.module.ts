import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectorAUserPage } from './sector-a-user.page';

const routes: Routes = [
  {
    path: '',
    component: SectorAUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectorAUserPageRoutingModule {}
