import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMainDisplayComponent } from './weather-main-display.component';

describe('WeatherMainDisplayComponent', () => {
  let component: WeatherMainDisplayComponent;
  let fixture: ComponentFixture<WeatherMainDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherMainDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMainDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
