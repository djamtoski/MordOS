import { Component, Input, OnInit } from '@angular/core';
import { mergeMap, Subscription } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { ScreenService } from './screen.service';

@Component({
  selector: 'os-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  @Input() id: any;
  @Input() position: any = {};
  @Input() title: string = '';

  item: any;
  subscription: Subscription | undefined;

  constructor(private screenService: ScreenService, private storage: StorageService) {}

  ngOnInit(): void {
    this.subscription = this.screenService
      .getItemData(this.id)
      .pipe(
        mergeMap((id : any) => {
          return this.storage.getById(id);
        })
      )
      .subscribe((item : any) => {
        this.item = item;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  delete() {
    this.screenService.remove(this.id);
  }

  updatePosition(event: any) {
    const { x, y } = event.getBoundingClientRect();
    this.screenService.update(this.id, { position: { x, y } });
  }

  goBack() {
    this.screenService.updateItemData(this.id, this.item.parentId);
  }

  moveToTop() {
    this.screenService.positionTop(this.id);
  }

}
