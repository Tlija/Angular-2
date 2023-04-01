import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {

   }
   getAllUsers(){
    return this.http.get('http://localhost:7000/user')
  }

  getAllProduct(){
    return this.http.get('http://localhost:7000/products/')
  }
  // title:string, description:string, category:string,price:string

  addproduct( profile:any){

    return this.http.post('http://localhost:7000/products/add',profile)
  }

  deletProduct(id:any){

    return this.http.delete('http://localhost:7000/products/'+id)

  }


}
