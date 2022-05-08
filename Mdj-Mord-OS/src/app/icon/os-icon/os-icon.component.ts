import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'os-icon',
  templateUrl: './os-icon.component.html',
  styleUrls: ['./os-icon.component.scss']
})
export class OsIconComponent implements OnInit {

  @ViewChild('input')
  input!: ElementRef<HTMLInputElement>;
  @Input() data: any;
  @Input() window: any;

  renaming: boolean = false;

  icons = {
    txt: '📜',
    news: '🗞️',
    browser: '🌎',
    camera: '🎞️',
    selfies: '🤳',
    gallery: '🖼️',
    pictures: '🖼️',
    files: '🗀',
    folder : '🗀',
    default : '🛀'
  } as const;

  public icon = '⛓️';

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    const type = this.data.type as keyof typeof this.icons;
    this.icon = this.icons[type];
  }

  open() {
    if (this.data.type === 'folder' && this.window) {
      // this.windows.updateItemContent(this.window, this.data.id);
    } else {
      // this.windows.add({ title: this.data.name }, this.data.id);
    }
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.save({ target: event.target } as FocusEvent);
    }
  }

  save(event: FocusEvent) {
    this.storage.update(this.data.id, {
      name: (event.target as HTMLInputElement).value,
    });
    this.renaming = false;
  }

  rename() {
    this.renaming = true;
    setTimeout(() => {
      this.input.nativeElement.focus();
      this.input.nativeElement.select();
    });
  }
}
