import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'os-web-browser',
  templateUrl: './web-browser.component.html',
  styleUrls: ['./web-browser.component.scss']
})
export class WebBrowserComponent implements OnInit {
  @Input() data: any;
  address = 'https://github.com/djamtoski';
  constructor() {}

  ngOnInit(): void {}

}
