import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DumbphoneLandingPage } from './dumbphone-landing.page';

const routes: Routes = [
  {
    path: '',
    component: DumbphoneLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DumbphoneLandingPageRoutingModule {}
