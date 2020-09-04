import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLBai2Component } from './tlbai2.component';

describe('TLBai2Component', () => {
  let component: TLBai2Component;
  let fixture: ComponentFixture<TLBai2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLBai2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLBai2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
