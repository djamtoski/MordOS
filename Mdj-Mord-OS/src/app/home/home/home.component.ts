import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/_services';
import { ItemTypes, StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rootItems: Observable<any> | undefined;

  constructor(private auth: AuthenticationService, public storage : StorageService) {}

  ngOnInit(): void {
    this.rootItems = this.storage.getRootItems();
  }

  logout() {
    this.auth.logout();
  }

  addFile() {
    this.storage.add({
      name: 'New.txt',
      type: ItemTypes.txt,
      content: 'New file Text!',
    });
  }

}
