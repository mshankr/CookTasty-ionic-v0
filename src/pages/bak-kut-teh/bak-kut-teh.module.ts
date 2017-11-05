import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BakKutTehPage } from './bak-kut-teh';

@NgModule({
  declarations: [
    BakKutTehPage,
  ],
  imports: [
    IonicPageModule.forChild(BakKutTehPage)
  ],
  exports: [
    BakKutTehPage
  ]
})
export class BakKutTehPageModule { }
