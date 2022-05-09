import { ApplicationWrapperComponent } from '../application/application-wrapper/application-wrapper.component';
import { FolderAppComponent } from '../application/folder-app/folder-app.component';
import { GalleryAppComponent } from '../application/gallery-app/gallery-app.component';
import { NewspaperComponent } from '../application/newspaper/newspaper.component';
import { PhotoViewerComponent } from '../application/photo-viewer/photo-viewer.component';
import { SelfieCameraComponent } from '../application/selfie-camera/selfie-camera.component';
import { TxtfileComponent } from '../application/txtfile/txtfile.component';
import { CheckUrlPipe } from '../application/web-browser/check-url.pipe';
import { WebBrowserComponent } from '../application/web-browser/web-browser.component';

export * from './auth.guard';
export * from './error.interceptor';
export * from './fake-backend';
export * from './jwt.interceptor';
export * from './randomGuid';

export const Application_Components = [
WebBrowserComponent,
SelfieCameraComponent,
FolderAppComponent,
GalleryAppComponent,
NewspaperComponent,
TxtfileComponent,
ApplicationWrapperComponent,
CheckUrlPipe,
PhotoViewerComponent
]
