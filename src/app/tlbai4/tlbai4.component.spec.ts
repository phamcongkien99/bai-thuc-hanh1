import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLBai4Component } from './tlbai4.component';

describe('TLBai4Component', () => {
  let component: TLBai4Component;
  let fixture: ComponentFixture<TLBai4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLBai4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLBai4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
