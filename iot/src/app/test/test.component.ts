import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiCalls } from '../services/apicalls.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiCalls) { }

  ngOnInit() {
  this.profileForm = this.fb.group({
    date: [''],
    distance: [''],
    humidity: [''],
    id: [],
    soil: [],
    temprature: [],
    time: []
  });
  }
  onSubmit(){
    console.log(this.profileForm.value);
    this.api.test(this.profileForm.value).subscribe((res: any) => {})
  }
}
