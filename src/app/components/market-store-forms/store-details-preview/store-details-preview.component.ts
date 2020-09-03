// import { Component, OnInit } from '@angular/core';
import { Component, OnChanges, Input, AfterViewInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppService } from "../../../app.service";
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-store-details-preview',
  templateUrl: './store-details-preview.component.html',
  styleUrls: ['./store-details-preview.component.scss']
})
export class StoreDetailsPreviewComponent {

  storeForm: any;
  private _previewData
  storeDetails: any;
  contactDetails: any;

  @Input()
  set previewData(values) {
    this._previewData = values;
  }
  get previewData() {

    return this._previewData;
  }

  constructor(private appService: AppService) { }





  submit() {
    console.log('submitted');
    this.storeDetails = this.appService.getDynamicForm('storeDetails');
    this.contactDetails = this.appService.getDynamicForm('contactDetails');
    console.log(this.storeDetails.value);
    console.log(this.contactDetails.value);
    // this.previewData = result.value;
    // this.storeContactdetails = contactDetails.value;
    // console.log(this._previewData);
    // this.formSubmitted = true;

  }

}
