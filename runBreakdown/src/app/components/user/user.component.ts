import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  mileage:number;
  time:number;
  pace:number;
  placeholder:number;
  temp:string;
  mileageClick:number = 0;
  hour:number;
  minute:number;
  moment:any;
  fivePlaceholder:number = 0.00;
  tenPlaceholder:number = 0.00;
  halfPlaceholder:number = 0.00;
  fullPlaceholder:number = 0.00;

  constructor() { 
        //console.log('constructor ran..');
  }
    
  ngOnInit() {
    this.mileage = 0;
    this.time = 0;
    this.pace = 0;
  }

  calcPace(){
    //console.log("Hello");
    this.mileageClick = this.mileage;
    this.placeholder = this.time/this.mileage;
    this.temp = this.placeholder.toFixed(2);
    this.pace = +this.temp;
    this.temp = (this.pace*3.1).toFixed(2);
    this.fivePlaceholder = +this.temp;
    this.temp = (this.pace*6.2).toFixed(2);
    this.tenPlaceholder = +this.temp;
    this.temp = (this.pace*13.1).toFixed(2);
    this.halfPlaceholder = +this.temp;
    this.temp = (this.pace*26.2).toFixed(2);
    this.fullPlaceholder = +this.temp;

  }

}
