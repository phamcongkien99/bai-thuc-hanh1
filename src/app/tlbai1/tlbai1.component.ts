import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tlbai1',
  templateUrl: './tlbai1.component.html',
  styleUrls: ['./tlbai1.component.css']
})
export class TLBai1Component implements OnInit {

  constructor() { }
  s=0;
  n: any;
  x: any;
  ngOnInit(): void {

  }
  tinh(){
    for(let i=1;i<=this.n;++i){
      this.s += Math.pow(this.x,i);
    }
  }
}

