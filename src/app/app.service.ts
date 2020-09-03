import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  public blogFormObject = {}
  public storeFormObject = {}

  private dynamicForm: any;
  private marketStoreContactDetailsForm: any;
  private marketStoreDetailsForm: any;

  getDynamicForm(formName) {
    if (formName === 'contactDetails') {
      return this.marketStoreContactDetailsForm;
    } else if (formName === 'storeDetails') {
      return this.marketStoreDetailsForm;
    } else {
      return this.dynamicForm;
    }
  }

  setDynamicForm(value, formName) {
    if (formName === 'contactDetails') {
      this.marketStoreContactDetailsForm = value;
    } else if (formName === 'storeDetails') {
      this.marketStoreDetailsForm = value;
    } else {
      this.dynamicForm = value;
    }
  }

  // getMarketStoreContactDetailsForm(){

  // }

  // setMarketStoreContactDetailsForm(){

  // }

}
