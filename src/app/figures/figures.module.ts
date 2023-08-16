import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiguresPageRoutingModule } from './figures-routing.module';

import { FiguresPage } from './figures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiguresPageRoutingModule
  ],
  declarations: [FiguresPage]
})
export class FiguresPageModule {}
