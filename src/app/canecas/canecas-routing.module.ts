import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanecasPage } from './canecas.page';

const routes: Routes = [
  {
    path: '',
    component: CanecasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanecasPageRoutingModule {}
