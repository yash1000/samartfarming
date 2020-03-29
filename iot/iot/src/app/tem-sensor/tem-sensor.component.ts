import { Component, OnInit } from '@angular/core';
import { ApiCalls } from '../services/apicalls.service';

@Component({
  selector: 'app-tem-sensor',
  templateUrl: './tem-sensor.component.html',
  styleUrls: ['./tem-sensor.component.scss']
})
export class TemSensorComponent implements OnInit {
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
