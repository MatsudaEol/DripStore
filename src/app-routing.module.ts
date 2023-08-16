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
    path: 'ofertas',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'zoro',
    loadChildren: () => import('./zoro/zoro.module').then( m => m.ZoroPageModule)
  },
  {
    path: 'berserk',
    loadChildren: () => import('./berserk/berserk.module').then( m => m.BerserkPageModule)
  },
  {
    path: 'katana',
    loadChildren: () => import('./katana/katana.module').then( m => m.KatanaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
