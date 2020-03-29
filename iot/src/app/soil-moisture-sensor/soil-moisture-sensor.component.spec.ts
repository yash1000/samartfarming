import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilMoistureSensorComponent } from './soil-moisture-sensor.component';

describe('SoilMoistureSensorComponent', () => {
  let component: SoilMoistureSensorComponent;
  let fixture: ComponentFixture<SoilMoistureSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoilMoistureSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilMoistureSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
