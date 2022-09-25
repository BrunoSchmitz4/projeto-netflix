import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreqQuesComponent } from './freq-ques.component';

describe('FreqQuesComponent', () => {
  let component: FreqQuesComponent;
  let fixture: ComponentFixture<FreqQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreqQuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreqQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
