import { Component, OnInit } from '@angular/core';
import { ApiCalls } from '../services/apicalls.service';
@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {
  array: any;

  constructor(private api: ApiCalls) { }

  ngOnInit() {
    const a = JSON.parse(localStorage.getItem('accessToken'));
    const ab = {
      id: a.uid
    }
    console.log(a.uid);
    this.api.alldata(ab).subscribe((res: any) => {
  // console.log(res.humidity);
  this.array = res;
  // for(let i=0; i<res.length;i++){
  //   console.log(res[i].humidity);
  //   let humidity 
  //   console.log(res[i].time);
  //   console.log(res[i].date);
  // }
  });
  }

}
