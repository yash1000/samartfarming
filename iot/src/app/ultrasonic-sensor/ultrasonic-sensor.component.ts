import { Component, OnInit } from '@angular/core';
import { ApiCalls } from '../services/apicalls.service';

@Component({
  selector: 'app-ultrasonic-sensor',
  templateUrl: './ultrasonic-sensor.component.html',
  styleUrls: ['./ultrasonic-sensor.component.scss']
})
export class UltrasonicSensorComponent implements OnInit {
  array: any;

  constructor(private api: ApiCalls) { }

  ngOnInit() {
    const a = JSON.parse(localStorage.getItem('accessToken'));
    const ab = {
      id: a.uid
    }
    console.log(a.uid);
    this.api.alldata(ab).subscribe((res: any) => {
  this.array = res;
  });
  }
  }

