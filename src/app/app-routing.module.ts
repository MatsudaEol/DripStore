import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'roupas',
    loadChildren: () => import('./roupas/roupas.module').then( m => m.RoupasPageModule)
  },
  {
    path: 'acessorios',
    loadChildren: () => import('./acessorios/acessorios.module').then( m => m.AcessoriosPageModule)
  },
  {
    path: 'canecas',
    loadChildren: () => import('./canecas/canecas.module').then( m => m.CanecasPageModule)
  },
  {
    path: 'figures',
    loadChildren: () => import('./figures/figures.module').then( m => m.FiguresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
