import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-feild',
  templateUrl: './address-feild.component.html',
  styleUrls: ['./address-feild.component.scss']
})
export class AddressFeildComponent implements OnInit {

  config;
  group: FormGroup;
  formattedaddress: any;

  constructor() { }

  ngOnInit() {
    const validations = [];
    if (this.config.isRequired) {
      validations.push(Validators.required);
    }
    this.group.get(this.config.id).setValidators(validations);
    this.group.get(this.config.id).updateValueAndValidity();
  }

  public AddressChange(address: any) {
    this.formattedaddress = address.formatted_address;
    if (this.config.preFillValues) {
      const results = address.address_components;
      for (var i = 0; i < results.length; i++) {
        var fieldType = results[i].types[0];
        if (this.config.preFillValues[fieldType]) {
          var val = results[i][this.config.preFillValues[fieldType]];
          this.group.get(fieldType).setValue(val);
        }
      }
    }
  }
}