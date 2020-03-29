import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../services/custom-validators.services';
import { ApiCalls } from '../services/apicalls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registraton',
  templateUrl: './registraton.component.html',
  styleUrls: ['./registraton.component.scss']
})
export class RegistratonComponent implements OnInit {

  profileForm: FormGroup;
  new: any;

  constructor(private fb: FormBuilder, private api: ApiCalls, private routes: Router) { }

  ngOnInit() {

    this.profileForm = this.fb.group({
      username:['', Validators.required],
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
            CustomValidators.patternValidator(/[!@#\$%\^&?]/, {
              haslengthCase: true
            }),
            ,
          ]),
          Validators.minLength(8)
        ]
      ],
      cpassword: [ null, [Validators.required, Validators.compose([CustomValidators.matchValues('password'),
      ])]]
    });
  }
  onSubmit(event) {
    this.new = {
      displayName: this.profileForm.value.username,
      Emailid: this.profileForm.value.Emailid,
      password: this.profileForm.value.password
    };
    this.api.registration(this.new).subscribe((res: any) => {
      console.log(res.message);
      if (res.message === 'successfully resgisterd') {
        this.routes.navigate(['/login']);
      } else {
        this.profileForm.reset();
        this.routes.navigate(['/login']);
      }
      });
  }
  onlogin(){
    this.routes.navigate(['/login']);
  }
}
