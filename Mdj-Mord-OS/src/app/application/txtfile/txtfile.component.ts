import { Component, Input, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/screen/screen.service';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'os-textapp',
  templateUrl: './txtfile.component.html',
  styleUrls: ['./txtfile.component.scss']
})
export class TxtfileComponent implements OnInit {
  @Input() data: any;
  @Input() parent: any;
  display: string = '';

  constructor(private storage: StorageService, private windows: ScreenService) {}

  ngOnInit(): void {
    this.display = this.data.content;
  }

  save() {
    this.storage.update(this.data.id, { content: this.display });
    this.close();
  }

  close() {
    this.windows.remove(this.parent);
  }
}
