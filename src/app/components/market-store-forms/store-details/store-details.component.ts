import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { AppService } from "../../../app.service";
import * as data from '../../../config/marketStore.json';


@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {

  marketStoreData: any;
  group: FormGroup;
  params: object;
  @Output() onContactSubmit = new EventEmitter<any>();

  public formattedaddress = " ";


  constructor(public appService: AppService, private router: Router) {

    const jsonData = (data as any).default;
    this.marketStoreData = jsonData.storeDetails;
  }

  ngOnInit(): void {
  }

  // step2Submitted() {

  //   const dynamicForm = this.appService.getDynamicForm("storeDetails");

  // if (dynamicForm.status === "VALID") {
  //   this.onContactSubmit.emit(this.params = {
  //     type: 'isStoreValid',
  //     value: true,
  //     index: 2
  //   });
  // } else {
  //   this.onContactSubmit.emit(this.params = {
  //     type: 'isStoreValid',
  //     value: false,
  //     index: 1
  //   });
  // }

  // if (dynamicForm.status === "VALID") {
  //   this.onContactSubmit.emit(this.params = {
  //     type: 'isStoreValid',
  //     value: true,
  //     index: 2
  //   });
  // } else {
  //   this.onContactSubmit.emit(this.params = {
  //     type: 'isStoreValid',
  //     value: false,
  //     index: 1
  //   });
  // }
  // }


  public AddressChange(address: any) {
    // setting address from API to local variable 
    this.formattedaddress = address.formatted_address
  }
}
