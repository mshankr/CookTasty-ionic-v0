import {Component, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';

import { Items } from '../../providers/providers';
import {Item} from "../../models/item";
import {MainPage} from "../pages";

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'step-detail.html'
})
export class StepDetailPage {

  @ViewChild(Navbar) navBar: Navbar;
  ionViewDidLoad() {
    this.navBar.backButtonClick = (e:UIEvent)=>{
      this.count--;
    }
  }

  item: any;
  count: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    this.count = navParams.get('count');
  }

  /**
   * Navigate to the detail page for this item.
   */
  openStep(item: Item, count: number) {
    debugger;
      this.navCtrl.push('StepDetailPage', {
        item: item,
        count: count
      });

  }

  // to increase the count before going next step
  incrementCount() {
    this.count++;
  }


}
