import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanecasPageRoutingModule } from './canecas-routing.module';

import { CanecasPage } from './canecas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanecasPageRoutingModule
  ],
  declarations: [CanecasPage]
})
export class CanecasPageModule {}
