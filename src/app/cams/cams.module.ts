import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CamsPageRoutingModule } from './cams-routing.module';
import {WebcamModule} from 'ngx-webcam';
import { CamsPage } from './cams.page';

@NgModule({
  imports: [
    WebcamModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CamsPageRoutingModule
  ],
  declarations: [CamsPage]
})
export class CamsPageModule {}