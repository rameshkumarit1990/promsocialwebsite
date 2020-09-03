import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as data from '../../../config/marketStore.json';
import { AppService } from "../../../app.service";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  marketStoreData: any;
  group: FormGroup;
  params: object;
  @Output() onContactSubmit = new EventEmitter<any>();

  constructor(private appService: AppService) {
    const jsonData = (data as any).default;
    this.marketStoreData = jsonData.contactDetails;
  }


  // step1Submitted() {
  //   const dynamicForm = this.appService.getDynamicForm("contactDetails");
  //   let isValid = false;
  //   this.marketStoreData.forEach(element => {
  //     dynamicForm.get(element.id).valid ? isValid = true : isValid = false;
  //   })
  // if (dynamicForm.status === "VALID") {
  //   this.onContactSubmit.emit(this.params = {
  //     type: 'isContactValid',
  //     value: true,
  //     index: 1
  //   });
  // } else {
  //   this.onContactSubmit.emit(this.params = {
  //     type: 'isContactValid',
  //     value: false,
  //     index: 0
  //   });
  // }
  // }
}
