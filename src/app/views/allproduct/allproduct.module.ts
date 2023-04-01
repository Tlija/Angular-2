import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllproductRoutingModule } from './allproduct-routing.module';
import { AllproductComponent } from './allproduct/allproduct.component';


@NgModule({
  declarations: [
    AllproductComponent
  ],
  imports: [
    CommonModule,
    AllproductRoutingModule
  ]
})
export class AllproductModule { }
