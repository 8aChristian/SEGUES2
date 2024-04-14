import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectorBPage } from './sector-b.page';

const routes: Routes = [
  {
    path: '',
    component: SectorBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectorBPageRoutingModule {}
