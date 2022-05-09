import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'os-folder-app',
  templateUrl: './folder-app.component.html',
  styleUrls: ['./folder-app.component.css']
})
export class FolderAppComponent implements OnChanges {
  @Input() data: any;
  @Input() parent: any;

  content: Observable<Item[]> | undefined;

  constructor(private storage: StorageService) {}

  ngOnChanges(): void {
    this.content = this.storage.getChildren(this.data.id);
  }

  addItem(type: 'txt' | 'folder') {
    this.storage.add({
      parentId: this.data.id,
      type,
      name: `New ${type === 'txt' ? 'file.txt' : 'folder'}`,
    });
  }
}
