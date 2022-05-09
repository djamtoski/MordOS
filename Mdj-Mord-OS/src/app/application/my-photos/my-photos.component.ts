import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-my-photos',
  templateUrl: './my-photos.component.html',
  styleUrls: ['./my-photos.component.scss']
})
export class MyPhotosComponent implements OnChanges {
  @Input() data: any;
  @Input() parent: any;

  photos: Observable<any[]> | undefined;

  constructor(private storage: StorageService) {}

  ngOnChanges(): void {
    this.photos = this.storage.getChildren(this.data.id);
  }
}
