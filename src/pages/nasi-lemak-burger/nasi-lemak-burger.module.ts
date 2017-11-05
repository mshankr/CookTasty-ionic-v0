import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NasiLemakBurgerPage } from './nasi-lemak-burger';

@NgModule({
  declarations: [
    NasiLemakBurgerPage,
  ],
  imports: [
    IonicPageModule.forChild(NasiLemakBurgerPage)
  ],
  exports: [
    NasiLemakBurgerPage
  ]
})
export class NasiLemakBurgerPageModule { }
