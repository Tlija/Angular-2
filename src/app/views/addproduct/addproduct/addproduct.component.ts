import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

 constructor(private ds:DataService, private route:Router){}

 add(f:any){
  let data=f.value

  console.log(data);
  this.ds.addproduct(data).subscribe(data=>{
    this.route.navigate(['/admin/allproduct'])
  },(err:HttpErrorResponse)=>{
    console.log(err.error)
    console.log(err.status);
  }
  )

 }


}

