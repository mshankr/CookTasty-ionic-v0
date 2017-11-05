import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemCreatePage } from './item-create';
import { StepComponent } from './step.component';

@NgModule({
  declarations: [
    ItemCreatePage,
    StepComponent
  ],
  imports: [
    IonicPageModule.forChild(ItemCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemCreatePage
  ]
})
export class ItemCreatePageModule { }
