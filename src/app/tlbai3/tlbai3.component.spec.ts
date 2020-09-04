import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLBai3Component } from './tlbai3.component';

describe('TLBai3Component', () => {
  let component: TLBai3Component;
  let fixture: ComponentFixture<TLBai3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLBai3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLBai3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
