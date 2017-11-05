import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
      "name": "Chicken Nuggets",
      "profilePic": "assets/img/speakers/bear.jpg",
      "about": "Intermediate",
      "steps": [
        {
          "name": "Step 1",
          "details": "Cut the onions into thin slices.",
          "time": "100",
          "src": ""
        },
        {
          "name": "Step 2",
          "details": "Chop the garlic.",
          "time": "20",
          "src": ""
        },
        {
          "name": "Step 3",
          "details": "Fry the chicken for 10 min.",
          "time": "10",
          "src": ""
        },
        {
          "name": "Step 3",
          "details": "Bake the chicken for 50 min.",
          "time": "50",
          "src": ""
        }
      ]
    };


  constructor() {
    let items = [
      {
        "name": "Chicken Nuggets",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Intermediate",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/ica-slidebox-img-1.png'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/ica-slidebox-img-2.png'
          },
          /*{
            "name": "Step 3",
            "details": "Fry the chicken for 10 min.",
            "time": "10",
            "src": "",
            "image": 'assets/img/ica-slidebox-img-3.png'
          },
          {
            "name": "Step 3",
            "details": "Bake the chicken for 50 min.",
            "time": "50",
            "image": 'assets/img/ica-slidebox-img-2.png'
          },
          {
            "name": "Step 4",
            "details": "Bake the chicken for 50 min.",
            "time": "50",
            "image": 'assets/img/ica-slidebox-img-4.png'
          }*/
        ]
      },
      {
        "name": "Nasi Lemak Burger",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Yummy & revolutionary!",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/ica-slidebox-img-1.png'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/ica-slidebox-img-2.png'
          }
          ]
      },
      {
        "name": "Bak Kut Teh",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Steamy peppery goodness",
        "steps": [
          {
            "name": "Step 1",
            "details": "Debone the pork.",
            "time": "100",
            "image": 'assets/img/ica-slidebox-img-1.png'
          },
          {
            "name": "Step 2",
            "details": "Mix the chilli padi, garlic, onions and spices together.",
            "time": "20",
            "image": 'assets/img/ica-slidebox-img-2.png'
          }
        ]
      },
      {
        "name": "Sliced Fish Soup",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Intermediate",
        "steps": [
          {
            "name": "Step 1",
            "details": "Scale the fish and remove innards.",
            "time": "100",
            "image": 'assets/img/ica-slidebox-img-1.png'
          },
          {
            "name": "Step 2",
            "details": "Season the fish in soy sauce.",
            "time": "20",
            "image": 'assets/img/ica-slidebox-img-2.png'
          }
        ]
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant.",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/ica-slidebox-img-1.png'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/ica-slidebox-img-2.png'
          }
        ]
      },
      {
        "name": "Ellie Essie",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse.",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/ica-slidebox-img-1.png'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/ica-slidebox-img-2.png'
          }
        ]
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy.",
        "steps": [
          {
            "name": "Step 1",
            "details": "Cut the onions into thin slices.",
            "time": "100",
            "image": 'assets/img/ica-slidebox-img-1.png'
          },
          {
            "name": "Step 2",
            "details": "Chop the garlic.",
            "time": "20",
            "image": 'assets/img/ica-slidebox-img-2.png'
          }
        ]
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
