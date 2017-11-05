import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SlicedFishSoupPage } from './sliced-fish-soup';

@NgModule({
  declarations: [
    SlicedFishSoupPage,
  ],
  imports: [
    IonicPageModule.forChild(SlicedFishSoupPage)
  ],
  exports: [
    SlicedFishSoupPage
  ]
})
export class SlicedFishSoupPageModule { }
