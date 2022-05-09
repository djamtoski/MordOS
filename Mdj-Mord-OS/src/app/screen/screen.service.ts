import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { randomGuid } from '../_helpers';

export interface Screen<T> {
  id: string;
  title?: any;
  position?: {
    x?: number;
    y?: number;
  };
}

export type ScreenOptions<T> = Omit<Screen<T>, 'id'>;

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  items = new BehaviorSubject<Screen<unknown>[]>([]);
  itemContents = new BehaviorSubject<Record<string, string>>({});

  constructor() {}

  add<T>(Screen: ScreenOptions<T>, contentId: string) {
    const screens = this.items.value;
    const position = (screens.length + 1) * 20;
    const item = {
      id: randomGuid(),
      position: {
        x: position,
        y: position,
      },
      ...Screen,
    };
    this.items.next([...screens, item]);
    this.itemContents.next({
      ...this.itemContents.value,
      [item.id]: contentId,
    });
    return item;
  }

  remove(id: string) {
    this.items.next(this.items.value.filter((item) => id !== item.id));
  }

  update<T>(id: string, options: ScreenOptions<T>) {
    this.items.next(
      this.items.value.map((item) => {
        if (item.id === id) {
          Object.keys(options).forEach((key) => {
            (item as any)[key] = (options as any)[key];
          });
        }
        return item;
      })
    );
  }

  positionTop(id: string) {
    const screens = this.items.value;
    const index = screens.findIndex((item) => item.id === id);
    if (index !== -1 && index < screens.length - 1) {
      screens.push(screens.splice(index, 1)[0]);
      this.items.next(screens);
    }
  }

  getItemData(id: string) {
    return this.itemContents.pipe(
      map((contents) => {
        return contents[id];
      })
    );
  }

  updateItemData(id: string, contentId: string) {
    return this.itemContents.next({
      ...this.itemContents.value,
      [id]: contentId,
    });
  }
}
