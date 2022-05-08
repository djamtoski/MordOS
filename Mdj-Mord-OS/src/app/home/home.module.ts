import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { OsIconComponent } from '../icon/os-icon/os-icon.component';

@NgModule({
  declarations: [
    HomeComponent,
    OsIconComponent
  ],
  imports: [
    CommonModule, HomeRoutingModule,
  ]
})
export class HomeModule { }
