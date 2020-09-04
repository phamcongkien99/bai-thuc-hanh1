import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tlbai6',
  templateUrl: './tlbai6.component.html',
  styleUrls: ['./tlbai6.component.css']
})
export class TLBai6Component implements OnInit {

  constructor() { }
   s = [-1,-5,3,4,8,,-43,10,25,55];
   tong=0;
  ngOnInit(): void {
    for(let i=0; i<this.s.length;i++)
    {
      if(this.s[i]>0)
      this.tong+=this.s[i];
    }
    console.log(this.tong)
  }

}
