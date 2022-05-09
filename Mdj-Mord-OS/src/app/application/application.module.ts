import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebBrowserComponent } from './web-browser/web-browser.component';
import { SelfieCameraComponent } from './selfie-camera/selfie-camera.component';
import { FolderAppComponent } from './folder-app/folder-app.component';
import { GalleryAppComponent } from './gallery-app/gallery-app.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { TxtfileComponent } from './txtfile/txtfile.component';
import { MyPhotosComponent } from './my-photos/my-photos.component';
import { FormsModule } from '@angular/forms';
import { CheckUrlPipe } from './web-browser/check-url.pipe';
import { ApplicationWrapperComponent } from './application-wrapper/application-wrapper.component';
import { Application_Components } from '../_helpers';



@NgModule({
  declarations: [
    ...Application_Components
  ],
  exports : [
    ...Application_Components
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ApplicationModule { }
