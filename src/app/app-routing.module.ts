import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs-folder/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dumbphone-landing',
    loadChildren: () => import('./pages/dumbphone-landing/dumbphone-landing.module').then( m => m.DumbphoneLandingPageModule)
  },
  {
    path: 'phone/:id',
    loadChildren: () => import('./pages/phone/phone.module').then( m => m.PhonePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
