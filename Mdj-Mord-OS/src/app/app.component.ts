import { Component } from '@angular/core';
import { ScreenService } from './screen/screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mdj-Mord-OS';

  constructor(public screen: ScreenService) {}
}
