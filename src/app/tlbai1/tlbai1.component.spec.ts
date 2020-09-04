import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLBai1Component } from './tlbai1.component';

describe('TLBai1Component', () => {
  let component: TLBai1Component;
  let fixture: ComponentFixture<TLBai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLBai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLBai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
