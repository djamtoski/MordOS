import { Injectable } from '@angular/core';
import { BehaviorSubject, find, map } from 'rxjs';
import { randomGuid } from '../_helpers';

export const ItemTypes = {
  folder: 'folder',
  txt: 'txt',
  browser: 'browser',
  news: 'news',
  camera: 'camera',
  photo: 'photo',
  selfies: 'selfies',
  unknown: 'unknown',
} as const;

export interface Item {
  id: string;
  name: string;
  type: keyof typeof ItemTypes;
  dateCreated?: string;
  parentId?: string;
  content?: any;
}

export type ItemOptions = Omit<Partial<Item>, 'dateCreated' | 'id'>;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  browser = {
    id: 'browser',
    name: 'Browser',
    type: ItemTypes.browser,
  };
  myPhotos = {
    id: 'my-photos',
    name: 'Selfies',
    type: ItemTypes.selfies,
  };
  files = {
    id: 'files',
    name: 'My Files',
    type: ItemTypes.folder,
  };

  news = {
    id: 'news',
    name: 'Newspaper',
    type: ItemTypes.news,
  };
  camera = {
    id: 'camera',
    name: 'My Camera',
    type: ItemTypes.camera,
  };

  defaultItems = [this.browser, this.camera, this.myPhotos, this.files, this.news,];

  items = new BehaviorSubject<Item[]>([...this.defaultItems]);

  constructor() {}

  getDefaultItems() {
    return this.items.pipe(
      map((items) => {
        return items.filter(({ parentId }) => !parentId);
      })
    );
  }

  getChildren(id: string) {
    return this.items.pipe(
      map((items) => {
        return items.filter(({ parentId }) => parentId === id);
      })
    );
  }

  getById(id: string) {
    return this.items.pipe(
      map((items) => {
        return items.find((item) => item.id === id);
      })
    );
  }

  add(data: Omit<Item, 'id'>) {
    const newItem = {
      id: randomGuid(),
      dateCreated: new Date().toISOString(),
      ...data,
    };
    this.items.next([...this.items.value, newItem]);
    return newItem;
  }

  update(id: string, data: ItemOptions) {
    const items = this.items.value;
    this.items.next(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...data,
          };
        }
        return item;
      })
    );
  }
}
