import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { AppService } from "../../../app.service";

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {

  @Input() storeForm: FormGroup;
  // genderValues: any = [
  //   { name: "Men's" },
  //   { name: "Women's" }
  // ];
  // logoUrl: "";
  // logourlEnabled: boolean;
  // urls = [];
  // storeForm: any;
  // storeFormss: any;
  // public formattedaddress = " ";

  step2Submitted() {
    this.storeForm.get('storeInformation').get('storeName').markAsTouched();
    this.storeForm.get('storeInformation').get('storeName').updateValueAndValidity();
    this.storeForm.get('storeInformation').get('description').markAsTouched();
    this.storeForm.get('storeInformation').get('description').updateValueAndValidity();
    this.storeForm.get('storeInformation').get('website').markAsTouched();
    this.storeForm.get('storeInformation').get('website').updateValueAndValidity();
    this.storeForm.get('storeInformation').get('mobile').markAsTouched();
    this.storeForm.get('storeInformation').get('mobile').updateValueAndValidity();
    this.storeForm.get('storeInformation').get('costLevel').markAsTouched();
    this.storeForm.get('storeInformation').get('costLevel').updateValueAndValidity();
    this.storeForm.get('storeInformation').get('storeCategory').markAsTouched();
    this.storeForm.get('storeInformation').get('storeCategory').updateValueAndValidity();
    this.storeForm.get('storeInformation').get('storeTimings').markAsTouched();
    this.storeForm.get('storeInformation').get('storeTimings').updateValueAndValidity();
    this.storeForm.get('storeInformation').get('tags').markAsTouched();
    this.storeForm.get('storeInformation').get('tags').updateValueAndValidity();
    this.storeForm.get('storeInformation').get('discountCode').markAsTouched();
    this.storeForm.get('storeInformation').get('discountCode').updateValueAndValidity();
    this.storeForm.get('storeInformation').get('discountDescription').markAsTouched();
    this.storeForm.get('storeInformation').get('discountDescription').updateValueAndValidity();
    // this.storeForm.get('storeInformation').get('storeLogo').markAsTouched();
    // this.storeForm.get('storeInformation').get('storeLogo').updateValueAndValidity();
    // this.storeForm.get('storeInformation').get('storeGallery').markAsTouched();
    // this.storeForm.get('storeInformation').get('storeGallery').updateValueAndValidity();
  }


  constructor(public appService: AppService, private router: Router) { }

  // storeInformation = new FormGroup({
  //   storeName: new FormControl('', Validators.required),
  //   description: new FormControl('', Validators.required),
  //   address: new FormControl('', Validators.required),
  // address: new FormGroup({
  //   address: new FormControl(''),
  //   city: new FormControl(''),
  //   state: new FormControl(''),
  //   country: new FormControl(''),
  //   postalZipCode: new FormControl(''),
  // }),
  //   website: new FormControl('', Validators.required),
  //   mobile: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  //   costLevel: new FormControl('', Validators.required),
  //   gender: new FormControl('', Validators.required),
  //   storeCategory: new FormControl('', Validators.required),
  //   storeTimings: new FormControl('', Validators.required),
  //   tags: new FormControl('', Validators.required),
  //   discountCode: new FormControl('', Validators.required),
  //   discountDescription: new FormControl('', Validators.required),
  //   storeLogo: new FormControl('', Validators.required),
  //   storeGallery: new FormControl('', Validators.required)
  // })
  // get form() {
  //   return this.storeInformation.controls;
  // }

  // addStoreForm(storeForm) {
  //   let storeForms = [];
  //   if (localStorage.getItem('StoreForms')) {
  //     storeForms = JSON.parse(localStorage.getItem('StoreForms'));
  //     storeForms = [storeForm, ...storeForms];
  //   } else {
  //     storeForms = [storeForm];
  //   }
  //   localStorage.setItem('StoreForms', JSON.stringify(storeForms));
  //   this.storeFormss = Object.assign(this.storeFormss, this.storeInformation.value);

  // }

  // goToPreview() {
  // this.clicked = true;
  // console.log(this.storeInformation.value);
  // this.appService.storeFormObject = this.storeInformation.value;
  // if (this.storeInformation.invalid) {
  //   return;
  // }
  // this.router.navigate(['/preview']);
  // console.log(this.storeInformation.value);
  // this.storeForm=Object.assign(this.storeForm,this.storeInformation.value);
  //   this.addStoreForm(this.storeInformation.value);
  // }

  // showStoreLogo(e) {
  //   this.logourlEnabled = true;
  //   if (e.target.files) {
  //     var reader = new FileReader;
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload = (event: any) => {
  //       this.logoUrl = event.target.result;
  //     }
  //   }
  // }

  // showStoreGallery(e) {
  //   if (e.target.files) {
  //     for (var i = 0; i < File.length; i++) {
  //       var reader = new FileReader();
  //       reader.readAsDataURL(e.target.files[i]);
  //       reader.onload = (event: any) => {
  //         this.urls.push(event.target.result);
  //       }
  //     }
  //   }
  // }
  // public AddressChange(address: any) {
  //setting address from API to local variable 
  //   this.formattedaddress = address.formatted_address
  // }
  // onCheckboxChange(e) {
  //   const gender: FormArray = this.storeInformation.get('gender') as FormArray;

  //   if (e.target.checked) {
  //     gender.push(new FormControl(e.target.value));
  //   } else {
  //      const index = gender.controls.findIndex(x => x.value === e.target.value);
  //      gender.removeAt(index);
  //   }
  // }

  // onSubmit() {
  //   console.log(this.storeInformation.value);
  // }
  ngOnInit(): void {
  }

}
