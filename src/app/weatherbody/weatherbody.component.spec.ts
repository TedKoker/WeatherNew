import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherbodyComponent } from './weatherbody.component';

describe('WeatherbodyComponent', () => {
  let component: WeatherbodyComponent;
  let fixture: ComponentFixture<WeatherbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
