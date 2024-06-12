import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCardComponent } from './switch-card.component';

describe('SwitchCardComponent', () => {
  let component: SwitchCardComponent;
  let fixture: ComponentFixture<SwitchCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchCardComponent]
    });
    fixture = TestBed.createComponent(SwitchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
