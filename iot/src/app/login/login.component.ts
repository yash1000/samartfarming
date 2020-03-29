import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../services/custom-validators.services';
import { ApiCalls } from '../services/apicalls.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;
  new: any;
  constructor(private fb: FormBuilder, private routes: Router, private api: ApiCalls) { }

  ngOnInit() {

    this.profileForm = this.fb.group({
      Emailid: ['', [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.compose([
            CustomValidators.patternValidator(/\d/, { hasNumber: true }),
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
            CustomValidators.patternValidator(/[!@#\$%\^&]/, {
              haslengthCase: true
            }),
            ,
          ]),
          Validators.minLength(8)
        ]
      ]
    });
  }
  onSubmit(event) {
    console.log(this.profileForm.value);

    this.api.login(this.profileForm.value).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('accessToken', JSON.stringify(res));
      this.routes.navigate(['/dash-board']);
    });
  }
  onregistration(){
    this.routes.navigate(['/registration'])
  }
}













