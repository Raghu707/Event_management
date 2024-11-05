import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditComponetComponent } from './edit-componet/edit-componet.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponentComponent },
  // Add other routes here
 
  { path: 'add', component: AddEventComponent },
  { path: 'edit/:id', component: EditComponetComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
