import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigatorComponent} from "./navigator/navigator.component";


const routes: Routes = [
  {path: '', component: NavigatorComponent},
  {path: 'navigator', component: NavigatorComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
