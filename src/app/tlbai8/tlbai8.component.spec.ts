import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLBai8Component } from './tlbai8.component';

describe('TLBai8Component', () => {
  let component: TLBai8Component;
  let fixture: ComponentFixture<TLBai8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLBai8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLBai8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
