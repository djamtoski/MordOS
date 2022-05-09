import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OsIconComponent } from '../icon/os-icon/os-icon.component';



@NgModule({
  declarations: [
    OsIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    OsIconComponent
  ]
})
export class SharedModule { }
