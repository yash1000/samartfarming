import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemSensorComponent } from './tem-sensor.component';

describe('TemSensorComponent', () => {
  let component: TemSensorComponent;
  let fixture: ComponentFixture<TemSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
