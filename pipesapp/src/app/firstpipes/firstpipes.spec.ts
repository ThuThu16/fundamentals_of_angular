import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Firstpipes } from './firstpipes';

describe('Firstpipes', () => {
  let component: Firstpipes;
  let fixture: ComponentFixture<Firstpipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Firstpipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Firstpipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
