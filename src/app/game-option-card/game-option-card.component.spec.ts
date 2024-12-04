import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOptionCardComponent } from './game-option-card.component';

describe('GameOptionCardComponent', () => {
  let component: GameOptionCardComponent;
  let fixture: ComponentFixture<GameOptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameOptionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
