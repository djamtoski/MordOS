import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ScreenService } from 'src/app/screen/screen.service';
import { ItemTypes, StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'os-selfie-camera',
  templateUrl: './selfie-camera.component.html',
  styleUrls: ['./selfie-camera.component.scss']
})
export class SelfieCameraComponent implements OnInit {
  @Input() data: any;
  @Input() parent: any;

  private trigger: Subject<void> = new Subject<void>();

  constructor(private screen: ScreenService, private storage: StorageService) {}

  ngOnInit(): void {}

  save() {}

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(event: any) {
    this.storage.add({
      parentId: this.storage.myPhotos.id,
      name: `IMG_${new Date().toISOString()}.jpg`,
      type: ItemTypes.photo,
      content: event.imageAsDataUrl,
    });

    this.screen.remove(this.parent);
    this.screen.add({ title: 'My Photos' }, this.storage.myPhotos.id);
  }

}
