import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 atlasData!:any[];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    
    this.http.get("https://run.mocky.io/v3/a028cd78-a3d1-420d-9cdc-420635506555").subscribe((data:any)=>{
      this.atlasData=data;
      console.log("data",this.atlasData);
    })
  }
  
}
