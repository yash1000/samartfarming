import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasonicSensorComponent } from './ultrasonic-sensor.component';

describe('UltrasonicSensorComponent', () => {
  let component: UltrasonicSensorComponent;
  let fixture: ComponentFixture<UltrasonicSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltrasonicSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrasonicSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
