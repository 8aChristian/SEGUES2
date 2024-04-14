import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectorAPage } from './sector-a.page';

const routes: Routes = [
  {
    path: '',
    component: SectorAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectorAPageRoutingModule {}
