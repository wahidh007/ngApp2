import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './authentification/auth.component';

const routes: Routes = [
  { path: '', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'appareils', component: AppareilViewComponent },
  { path: '**', redirectTo: 'appareils' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
