import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFiveDaysComponent } from './weather-five-days.component';

describe('WeatherFiveDaysComponent', () => {
  let component: WeatherFiveDaysComponent;
  let fixture: ComponentFixture<WeatherFiveDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFiveDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFiveDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
