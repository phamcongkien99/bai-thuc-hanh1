import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tlbai8',
  templateUrl: './tlbai8.component.html',
  styleUrls: ['./tlbai8.component.css']
})
export class TLBai8Component implements OnInit {

  constructor() { }
  h: any;
  dt: any;
  kq: any;
  ngOnInit(): void {

  }
  tinh(){
    this.kq= (this.h*this.dt)/3;
  }

}
