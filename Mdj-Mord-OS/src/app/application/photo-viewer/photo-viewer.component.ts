import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'os-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent implements OnInit {
  @Input() data: any;
  @Input() parent: any;

  photo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.photo = this.data.content;
  }
}
