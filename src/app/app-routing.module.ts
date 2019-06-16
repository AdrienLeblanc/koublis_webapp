import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineFormComponent } from './wine-form/wine-form.component';
 
const routes: Routes = [
  { path: 'wines', component: WineListComponent },
  { path: 'addwine', component: WineFormComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }