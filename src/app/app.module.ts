import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai1Component } from './bai1/bai1.component';
import { FormsModule } from '@angular/forms';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { TLBai1Component } from './tlbai1/tlbai1.component';
import { TLBai2Component } from './tlbai2/tlbai2.component';
import { TLBai3Component } from './tlbai3/tlbai3.component';
import { TLBai4Component } from './tlbai4/tlbai4.component';
import { TLBai5Component } from './tlbai5/tlbai5.component';
import { TLBai6Component } from './tlbai6/tlbai6.component';
import { TLBai7Component } from './tlbai7/tlbai7.component';
import { TLBai8Component } from './tlbai8/tlbai8.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    Bai2Component,
    Bai3Component,
    TLBai1Component,
    TLBai2Component,
    TLBai3Component,
    TLBai4Component,
    TLBai5Component,
    TLBai6Component,
    TLBai7Component,
    TLBai8Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
