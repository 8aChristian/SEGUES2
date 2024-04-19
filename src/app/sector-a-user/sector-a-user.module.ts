import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectorAUserPageRoutingModule } from './sector-a-user-routing.module';

import { SectorAUserPage } from './sector-a-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectorAUserPageRoutingModule
  ],
  declarations: [SectorAUserPage]
})
export class SectorAUserPageModule {}
