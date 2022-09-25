import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCorpComponent } from './info-corp.component';

describe('InfoCorpComponent', () => {
  let component: InfoCorpComponent;
  let fixture: ComponentFixture<InfoCorpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCorpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
