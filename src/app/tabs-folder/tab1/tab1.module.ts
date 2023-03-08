import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { DumbphoneLandingPageModule } from 'src/app/pages/dumbphone-landing/dumbphone-landing.module';
import { PhoneMenuComponent } from 'src/app/components/phone-menu/phone-menu.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    DumbphoneLandingPageModule,
  ],
  declarations: [Tab1Page, PhoneMenuComponent]
})
export class Tab1PageModule {}
