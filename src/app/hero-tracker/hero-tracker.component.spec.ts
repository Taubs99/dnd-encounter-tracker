import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTrackerComponent } from './hero-tracker.component';

describe('HeroTrackerComponent', () => {
  let component: HeroTrackerComponent;
  let fixture: ComponentFixture<HeroTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
