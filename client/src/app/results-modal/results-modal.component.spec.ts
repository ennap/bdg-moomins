import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsModalComponent } from './results-modal.component';

describe('ResultsModalComponent', () => {
  let component: ResultsModalComponent;
  let fixture: ComponentFixture<ResultsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsModalComponent]
    });
    fixture = TestBed.createComponent(ResultsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
