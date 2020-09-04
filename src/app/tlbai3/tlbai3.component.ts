import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tlbai3',
  templateUrl: './tlbai3.component.html',
  styleUrls: ['./tlbai3.component.css']
})
export class TLBai3Component implements OnInit {

  constructor() { }
  ngOnInit(): void {
    let catten = (s) => {
      let n =  s.lastIndexOf(' ');
      return s.substr(n+1) + ' ' + s.substr(0,n);
    }
    let s = [{hoten: 'Nguyen Thi Mai', diemthi:9},
             {hoten: 'Tran Thi Anh', diemthi:7.5},
             { hoten: 'Hoang Thi Dung', diemthi:8.3}
            ].sort((a,b)=> {
    if(catten(a.hoten)>catten(b.hoten)) return 1;
    else if(catten(a.hoten)<catten(b.hoten)) return -1;
    return 0;
  });
  console.log(s);
  }

}
