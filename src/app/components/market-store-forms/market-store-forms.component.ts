import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-market-store-forms',
  templateUrl: './market-store-forms.component.html',
  styleUrls: ['./market-store-forms.component.scss']
})
export class MarketStoreFormsComponent implements OnInit {

  marketstoreForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.marketstoreForm = new FormGroup({
      'contactDetails': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        'phone': new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      }),
      'storeInformation': new FormGroup({
        'storeName': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        // 'address': new FormControl(null, Validators.required),
        'website': new FormControl(null, Validators.required),
        'mobile': new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        'costLevel': new FormControl(null, Validators.required),
        // 'gender': new FormControl(null, Validators.required),
        'storeCategory': new FormControl(null, Validators.required),
        'storeTimings': new FormControl(null, Validators.required),
        'tags': new FormControl(null, Validators.required),
        'discountCode': new FormControl(null, Validators.required),
        'discountDescription': new FormControl(null, Validators.required),
        // 'storeLogo': new FormControl(null, Validators.required),
        // 'storeGallery': new FormControl(null, Validators.required),

      })
    });

  }
}




