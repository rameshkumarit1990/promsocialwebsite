import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // loginForm: FormGroup;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  // ngOnInit(): void {
  // }
}
