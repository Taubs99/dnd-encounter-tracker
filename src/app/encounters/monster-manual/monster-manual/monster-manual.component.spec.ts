import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterManualComponent } from './monster-manual.component';

describe('MonsterManualComponent', () => {
  let component: MonsterManualComponent;
  let fixture: ComponentFixture<MonsterManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterManualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
