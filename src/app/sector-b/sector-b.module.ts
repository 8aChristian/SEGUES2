import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectorBPageRoutingModule } from './sector-b-routing.module';

import { SectorBPage } from './sector-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectorBPageRoutingModule
  ],
  declarations: [SectorBPage]
})
export class SectorBPageModule {}
