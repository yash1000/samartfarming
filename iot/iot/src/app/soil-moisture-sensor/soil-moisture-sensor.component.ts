import { Component, OnInit } from '@angular/core';
import { ApiCalls } from '../services/apicalls.service';
@Component({
  selector: 'app-soil-moisture-sensor',
  templateUrl: './soil-moisture-sensor.component.html',
  styleUrls: ['./soil-moisture-sensor.component.scss']
})
export class SoilMoistureSensorComponent implements OnInit {
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
