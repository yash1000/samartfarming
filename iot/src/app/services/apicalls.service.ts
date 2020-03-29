import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApiCalls {
  readonly baseurl = 'http://localhost:8000/';
  constructor(private https: HttpClient) {}
  // @param emp will send all form values as object
  login(id) {
    return this.https.post(this.baseurl + 'login', id);
  }
  registration(id){
  return this.https.post(this.baseurl + 'registration', id);
  }
  test(id) {
    return this.https.post(this.baseurl + 'test', id);
  }
  alldata(id){
    return this.https.post(this.baseurl + 'alldata', id);
  }
}
