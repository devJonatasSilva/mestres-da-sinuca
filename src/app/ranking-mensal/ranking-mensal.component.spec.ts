import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingMensalComponent } from './ranking-mensal.component';

describe('RankingMensalComponent', () => {
  let component: RankingMensalComponent;
  let fixture: ComponentFixture<RankingMensalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingMensalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingMensalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
