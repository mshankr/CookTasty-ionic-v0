import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListMasterPage } from './list-master';
import { RandomPipe } from './random.pipe';

@NgModule({
  declarations: [
    ListMasterPage,
    RandomPipe
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule { }
