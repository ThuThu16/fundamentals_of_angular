import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleImage } from './toggle-image';

describe('ToggleImage', () => {
  let component: ToggleImage;
  let fixture: ComponentFixture<ToggleImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
