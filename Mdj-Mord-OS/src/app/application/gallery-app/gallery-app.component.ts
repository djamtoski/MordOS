import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'os-gallery-app',
  templateUrl: './gallery-app.component.html',
  styleUrls: ['./gallery-app.component.css']
})
export class GalleryAppComponent implements OnChanges {
  @Input() data: any;
  @Input() parent: any;

  photos: Observable<any[]> | undefined;

  constructor(private storage: StorageService) {}

  ngOnChanges(): void {
    this.photos = this.storage.getChildren(this.data.id);
  }
}
