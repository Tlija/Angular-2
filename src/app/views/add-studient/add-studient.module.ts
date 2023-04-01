import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStudientRoutingModule } from './add-studient-routing.module';
import { AddStudientComponent } from './add-studient/add-studient.component';


@NgModule({
  declarations: [
    AddStudientComponent
  ],
  imports: [
    CommonModule,
    AddStudientRoutingModule
  ]
})
export class AddStudientModule { }
