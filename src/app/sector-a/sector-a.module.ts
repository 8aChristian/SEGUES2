import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectorAPageRoutingModule } from './sector-a-routing.module';

import { SectorAPage } from './sector-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectorAPageRoutingModule
  ],
  declarations: [SectorAPage]
})
export class SectorAPageModule {}
