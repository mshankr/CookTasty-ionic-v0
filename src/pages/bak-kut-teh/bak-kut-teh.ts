import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Platform} from 'ionic-angular';

import { Items } from '../../providers/providers';
import {MainPage} from "../pages";
import { Observable } from 'rxjs/Rx';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";

@IonicPage({
  name: 'BakKutTehPage'
})

@Component({
  selector: 'page-item-detail',
  templateUrl: 'bak-kut-teh.html'
})

export class BakKutTehPage {
  item: any;
  subscription;
  source;
  duration: number;
  pauser;
  pausable;
  numWords;
  words;
  pause = 0;

  constructor(public navCtrl: NavController, navParams: NavParams, public menu: MenuController, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;

    this.words = 'Row row row your boat gently down the stream merrily merrily merrily merrily life is but a dream'.split(' ')
    this.numWords = this.words.length;
  }

  startApp() {
    this.navCtrl.setRoot(MainPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }


// to unsubscribe the function and stop the iterations
  stopTimer () {
    this.pause=1;
    // this.pauser = Observable.of(0);
    // this.pausable = this.pauser.switchMap(paused => paused ? Observable.never() : this.source);
  }

  startTimer () {
    /*this.subscription = this.source.subscribe(
      x => console.log(50 - x)
    );*/
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);

    this.source = Observable
      .interval(500) // emit a value every half second
      .scan(x => x + 1) // just record the count (the function inside is just a predicate to tell it which values to count and which to ignore -- here we're just counting everything)
      .map(count => count % this.numWords) // convert each count into a the correct index for our words array, resetting after it hits the end
      .map(index => this.words[index]) // map to the word

// this.subscription = Observable
//   .interval(3000)
//   .switchMap(() => this.source);

  this.source.subscribe(word => this.duration = word);

    this.pauser = Observable.of(this.pause);
//
// // All the magic is here
    this.pausable = this.pauser.switchMap(paused => paused ? Observable.never() : this.source);
//
//     this.pausable.subscribe(x => console.log(x));
//
//     this.pauser.next(true);

/*
    let duration = 10;
    this.subscription = Observable
      .timer(0, 1000)
      .map(i => duration - i)
      .take(duration)
      .subscribe(
        i => this.duration = i,
        e => console.log("timer error: %s", e),
        () => console.log(0)
        );
        */
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
