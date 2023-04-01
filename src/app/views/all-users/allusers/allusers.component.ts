import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent  {
 dataArray:any
  constructor(private ds:DataService){

      this.ds.getAllUsers().subscribe(data=>this.dataArray=data)
  }


}
