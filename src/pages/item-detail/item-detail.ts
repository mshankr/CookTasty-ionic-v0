import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Platform} from 'ionic-angular';

import { Items } from '../../providers/providers';
import {MainPage} from "../pages";

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  slides: Slide[];
  showSkip = true;
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, public menu: MenuController, items: Items) {

        this.slides = [
          {
            title: "Chicken Nuggets",
            description: "Make delicious chicken nuggets",
            image: 'assets/img/ica-slidebox-img-1.png',
          },
          {
            title: "Step 1",
            description: "etc",
            image: 'assets/img/ica-slidebox-img-2.png',
          },
          {
            title: "Step 2",
            description: "etc",
            image: 'assets/img/ica-slidebox-img-3.png',
          }
        ];

    this.item = navParams.get('item') || items.defaultItem;
  }


  startApp() {
    this.navCtrl.setRoot(MainPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
  /**
   * Navigate to the detail page for this item.
   */
  // openMain() {
  //   this.navCtrl.push(MainPage);
  // }
}
