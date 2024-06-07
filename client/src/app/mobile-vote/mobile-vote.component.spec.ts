import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVoteComponent } from './mobile-vote.component';

describe('MobileVoteComponent', () => {
  let component: MobileVoteComponent;
  let fixture: ComponentFixture<MobileVoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileVoteComponent]
    });
    fixture = TestBed.createComponent(MobileVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
