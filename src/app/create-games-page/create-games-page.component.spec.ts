import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGamesPageComponent } from './create-games-page.component';

describe('CreateGamesPageComponent', () => {
  let component: CreateGamesPageComponent;
  let fixture: ComponentFixture<CreateGamesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGamesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
