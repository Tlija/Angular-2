import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudientComponent } from './add-studient/add-studient.component';

const routes: Routes = [
  {path:'',component:AddStudientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStudientRoutingModule { }
