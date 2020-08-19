import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() storeForm: FormGroup;

  // contactDetails = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
  //   phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  // })

  // get form() {
  //   return this.contactDetails.controls;
  // }

  // onSubmit() {
  //   console.log(this.contactDetails.value);
  // }

  step1Submitted() {
    this.storeForm.get('contactDetails').get('name').markAsTouched();
    this.storeForm.get('contactDetails').get('name').updateValueAndValidity();
    this.storeForm.get('contactDetails').get('email').markAsTouched();
    this.storeForm.get('contactDetails').get('email').updateValueAndValidity();
    this.storeForm.get('contactDetails').get('phone').markAsTouched();
    this.storeForm.get('contactDetails').get('phone').updateValueAndValidity();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
