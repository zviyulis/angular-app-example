import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryflagComponent } from './countryflag.component';

describe('CountryflagComponent', () => {
  let component: CountryflagComponent;
  let fixture: ComponentFixture<CountryflagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryflagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
