import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { OsIconComponent } from '../icon/os-icon/os-icon.component';
import { ScreenComponent } from '../screen/screen.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { ApplicationModule } from '../application/application.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ScreenComponent
  ],
  exports : [
    ScreenComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularDraggableModule,
    ApplicationModule,
    SharedModule
  ]
})
export class HomeModule { }
