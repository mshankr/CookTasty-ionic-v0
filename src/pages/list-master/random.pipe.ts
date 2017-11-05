import { Pipe, PipeTransform } from '@angular/core';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@Pipe({
  name: 'random',
  pure: false
})

export class RandomPipe implements PipeTransform {
  transform(items: Item[], filter: Item): Item[] {
    if (!items || !filter) {
      return items;
    }

    let x = 8 - Math.floor(Math.random() * 3);
    let y = Math.floor(Math.random() * 3);



    return items.filter(item => item[])
  }
}
