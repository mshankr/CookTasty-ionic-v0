import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Platform} from 'ionic-angular';

import { Items } from '../../providers/providers';
import {MainPage} from "../pages";
import { Observable } from 'rxjs/Rx';

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
  showSkip = true;
  item: any;
  minutes: number;
  seconds: number;
  minutes2: number;
  seconds2: number;

  constructor(public navCtrl: NavController, navParams: NavParams, public menu: MenuController, items: Items) {


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

    let duration1 = 600;
    let start1 = Observable.fromEvent(document.querySelector("#start1"), 'click');
    let stop1 = Observable.fromEvent(document.querySelector("#stop1"), 'click');
    let reset1 = Observable.fromEvent(document.querySelector("#reset1"), 'click');

    let duration2 = 3000;
    let start2 = Observable.fromEvent(document.querySelector("#start2"), 'click');
    let stop2 = Observable.fromEvent(document.querySelector("#stop2"), 'click');
    let reset2 = Observable.fromEvent(document.querySelector("#reset2"), 'click');

    let stopOrReset1 = Observable.merge(
      stop1,
      reset1
    );

    let stopOrReset2 = Observable.merge(
      stop2,
      reset2
    );

    let toTime = time => ({
      seconds: Math.floor(time % 60),
      minutes: Math.floor(time / 60)
    });


    let countdown = count => count-1;
    let res1 = count => duration1;
    let res2 = count => duration2;


    let interval1 = Observable
      .timer(0, 1000)
      .map(i => duration1 - i);

    let pause1 = interval1.takeUntil(stopOrReset1);

    let contOrReset1 = Observable.merge(
      pause1.mapTo(countdown),
      reset1.mapTo(res1)
    );

    start1
      .switchMapTo(contOrReset1)
      .scan(((count, currFunc) => currFunc(count)), duration1)
      .map(toTime)
      .subscribe(x => (this.minutes = x.minutes, this.seconds = x.seconds));

/////////////////////////////////////////////

    let interval2 = Observable
      .timer(0, 1000)
      .map(i => duration2 - i);

    let pause2 = interval2.takeUntil(stopOrReset2);

    let contOrReset2 = Observable.merge(
      pause2.mapTo(countdown),
      reset2.mapTo(res2)
    );

    start2
      .switchMapTo(contOrReset2)
      .scan(((count, currFunc) => currFunc(count)), duration2)
      .map(toTime)
      .subscribe(x => (this.minutes2 = x.minutes, this.seconds2 = x.seconds));

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
