import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  public blogFormObject = {}
  public storeFormObject = {}
  private dynamicForm: any;

  getDynamicForm() {
    return this.dynamicForm;
  }
  setDynamicForm(value) {
    this.dynamicForm = value;
  }

}
