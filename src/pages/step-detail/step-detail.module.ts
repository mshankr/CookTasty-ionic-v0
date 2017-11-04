import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StepDetailPage } from './step-detail';

@NgModule({
  declarations: [
    StepDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StepDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    StepDetailPage
  ]
})
export class StepDetailPageModule { }
