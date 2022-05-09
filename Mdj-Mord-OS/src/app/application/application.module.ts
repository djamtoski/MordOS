import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Application_Components } from '../_helpers';
import { WebcamModule } from 'ngx-webcam';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    ...Application_Components,
  ],
  exports : [
    ...Application_Components
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebcamModule,
    SharedModule
  ]
})
export class ApplicationModule { }
