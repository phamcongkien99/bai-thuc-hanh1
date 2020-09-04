import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLBai7Component } from './tlbai7.component';

describe('TLBai7Component', () => {
  let component: TLBai7Component;
  let fixture: ComponentFixture<TLBai7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLBai7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLBai7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
