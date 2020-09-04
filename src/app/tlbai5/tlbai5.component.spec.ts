import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLBai5Component } from './tlbai5.component';

describe('TLBai5Component', () => {
  let component: TLBai5Component;
  let fixture: ComponentFixture<TLBai5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLBai5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLBai5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
