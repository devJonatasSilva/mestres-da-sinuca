import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaBoasVindasComponent } from './tela-boas-vindas.component';

describe('TelaBoasVindasComponent', () => {
  let component: TelaBoasVindasComponent;
  let fixture: ComponentFixture<TelaBoasVindasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaBoasVindasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaBoasVindasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
