import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerIconsComponent } from './player-icons.component';

describe('PlayerIconsComponent', () => {
  let component: PlayerIconsComponent;
  let fixture: ComponentFixture<PlayerIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerIconsComponent]
    });
    fixture = TestBed.createComponent(PlayerIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
