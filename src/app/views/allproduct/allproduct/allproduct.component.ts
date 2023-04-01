import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

declare var window:any;

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
  formModle:any;
  ngOnInit() {

    this.formModle=new window.bootstrap.Modal(
     document.getElementById("exampleModal")
    )
     }
     openModal(){
      this.formModle.show();
     }

     doSomething(){
      this.formModle.hide()
     }

  dataProd:any=[]

  constructor(private ds:DataService){


    this.ds.getAllProduct().subscribe(data=> this.dataProd=data)


  }



  delete(id:any,i:number){

    this.ds.deletProduct(id).subscribe(response=>{
      console.log(response)
      if (Array.isArray(this.dataProd)) {
        this.dataProd.splice(i,1)

      } else {
        // handle the case where dataProd is not an array
      }


    })

  }
}
