import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsonpipe } from './jsonpipe';

describe('Jsonpipe', () => {
  let component: Jsonpipe;
  let fixture: ComponentFixture<Jsonpipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jsonpipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jsonpipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
