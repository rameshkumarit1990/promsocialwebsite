import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
  selector: 'app-market-store-forms',
  templateUrl: './market-store-forms.component.html',
  styleUrls: ['./market-store-forms.component.scss']
})
export class MarketStoreFormsComponent implements OnInit {

  // isValid: boolean = false;
  // isContactValid: boolean = false;
  // isStoreValid: boolean = false;
  // previewData: any;
  // storeContactdetails: any
  // activeState: Number = 0;
  // @ViewChild('stepper') stepper: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void { }

  // checkValidity(params) {
  //   this.isValid = params.type;
  //   this[params.type] = params.value;

  //   this.stepper.linear = false;
  //   this.stepper.selectedIndex = params.index;
  //   setTimeout(() => {
  //     this.stepper.linear = true;
  //   });
  //   const result = this.appService.getDynamicForm('storeDetails');
  //   const contactDetails = this.appService.getDynamicForm('contactDetails');
  //   this.previewData = result.value;
  //   this.storeContactdetails = contactDetails.value;
  // }

}