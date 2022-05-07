import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fakeBackendProvider } from 'src/helpers';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [
    fakeBackendProvider
  ]
})
export class AppRoutingModule { }
