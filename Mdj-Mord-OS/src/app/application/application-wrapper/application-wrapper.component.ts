import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'application-wrapper',
  templateUrl: './application-wrapper.component.html',
  styleUrls: ['./application-wrapper.component.scss']
})
export class ApplicationWrapperComponent implements OnInit {
  @Input() parent: any;
  @Input() set data(value : any) {
    console.log(value);
  }

  constructor() {}

  ngOnInit(): void {}

}
