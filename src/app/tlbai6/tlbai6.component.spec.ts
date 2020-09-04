import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLBai6Component } from './tlbai6.component';

describe('TLBai6Component', () => {
  let component: TLBai6Component;
  let fixture: ComponentFixture<TLBai6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLBai6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLBai6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
