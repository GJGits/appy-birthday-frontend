import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpBtnComponent } from './inp-btn.component';

describe('InpBtnComponent', () => {
  let component: InpBtnComponent;
  let fixture: ComponentFixture<InpBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InpBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InpBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
