import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yesterday } from './yesterday';

describe('Yesterday', () => {
  let component: Yesterday;
  let fixture: ComponentFixture<Yesterday>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yesterday]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yesterday);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
