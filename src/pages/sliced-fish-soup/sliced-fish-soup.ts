import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Platform} from 'ionic-angular';

import { Items } from '../../providers/providers';
import {MainPage} from "../pages";
import { Observable } from 'rxjs/Rx';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export interface Times {
  duration: number;
}

@IonicPage({
  name: 'SlicedFishSoupPage'
})

@Component({
  selector: 'page-item-detail',
  templateUrl: 'sliced-fish-soup.html'
})

export class SlicedFishSoupPage {
  showSkip = true;
  item: any;
  subscription;
  source;
  times: number[];
  duration: number;
  sec: number;

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

// to unsubscribe the function and stop the iterations
  stopTimer () {

  }

  startTimer () {
    /*this.subscription = this.source.subscribe(
      x => console.log(50 - x)
    );*/
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
    // this.subscription = Observable.timer(0, 1000, )

/*    this.source = new BehaviorSubject(10000);

    this.subscription = this.source.subscribe(
      v => console.log(v)
    );*/

    /*this.subscription = Observable.from(this.times).subscribe(
      a => console.log("timing: %s", a),
      e => console.log('onError: %s', e),
      () => console.log('onCompleted')
    );*/

    /*(x=this.times[0].duration => {
      x--;
    });*/
/*    this.subscription = Observable.interval(1000).subscribe(i => {
      // the number 1000 is on miliseconds so every second is going to have an iteration of what is inside this code.
      console.log(i);
      i++;
    });*/

let start = Observable.fromEvent(document.querySelector("#start"), 'click');
let stop = Observable.fromEvent(document.querySelector("#stop"), 'click');
let reset = Observable.fromEvent(document.querySelector("#reset"), 'click');

let stopOrReset = Observable.merge(
  stop,
  reset
);

let toTime = time => ({
  seconds: Math.floor(time % 60),
  minutes: Math.floor(time / 60)
})

let duration = 180;
let countdown = count => count-1;
let res = count => duration;


let interval = Observable
  .timer(0, 1000)
  .map(i => duration - i);

let pause = interval.takeUntil(stopOrReset);

let contOrReset = Observable.merge(
  pause.mapTo(countdown),
  reset.mapTo(res)
);

start
  .switchMapTo(contOrReset)
  .scan(((count, currFunc) => currFunc(count)), duration)
  .map(toTime)
  .subscribe(x => (this.duration = x.minutes, this.sec = x.seconds));

    /*let duration = 10;
    this.subscription = Observable
      .timer(0, 1000)
      .map(i => duration - i)
      .take(duration+1)
      .subscribe(
        i => this.duration = i,
        e => console.log("timer error: %s", e),
        () => console.log("timer done ")
        );*/


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
