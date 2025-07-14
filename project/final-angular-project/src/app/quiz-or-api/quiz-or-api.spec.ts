import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOrApi } from './quiz-or-api';

describe('QuizOrApi', () => {
  let component: QuizOrApi;
  let fixture: ComponentFixture<QuizOrApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizOrApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizOrApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
