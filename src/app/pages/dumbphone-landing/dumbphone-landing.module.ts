import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DumbphoneLandingPageRoutingModule } from './dumbphone-landing-routing.module';
import { DumbphoneLandingPage } from './dumbphone-landing.page';
import { PhoneCardComponent } from 'src/app/components/phone-card/phone-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DumbphoneLandingPageRoutingModule,
  ],
  declarations: [DumbphoneLandingPage, PhoneCardComponent],
  exports: [DumbphoneLandingPage]
})
export class DumbphoneLandingPageModule {}
