import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainFallSensorComponent } from './rain-fall-sensor.component';

describe('RainFallSensorComponent', () => {
  let component: RainFallSensorComponent;
  let fixture: ComponentFixture<RainFallSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainFallSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainFallSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
