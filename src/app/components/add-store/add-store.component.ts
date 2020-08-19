import { Component, OnInit } from '@angular/core';
import * as data from '../../config/addStore.json';
import { AppService } from "../../app.service";

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss']
})
export class AddStoreComponent implements OnInit {

  storeData: any = [];

  constructor(private appService: AppService) {
    this.storeData = (data as any).default;
  }

  ngOnInit(): void {
  }

  saveStoreForm() {
    const dynamicForm = this.appService.getDynamicForm();
    console.log(dynamicForm.value);
  }
}
