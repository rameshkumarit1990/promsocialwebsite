// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppService } from "../../../app.service";

@Component({
  selector: 'app-store-details-preview',
  templateUrl: './store-details-preview.component.html',
  styleUrls: ['./store-details-preview.component.scss']
})
export class StoreDetailsPreviewComponent implements OnInit {

  // storeInformationPreview = {
  //   storeName: '',
  //   description: '',
  //   address: '',
  //   website: '',
  //   mobile: '',
  //   costLevel: '',
  //   storeTimings: '',
  //   discountCode: '',
  //   discountDescription: '',
  //   storeLogo: '',
  //   storeGallery: ''
  // }
  constructor(private appService: AppService) { }


  @Input() storeForm: FormGroup;
  formSubmitted: boolean = false;


  ngOnInit(): void {
    // this.storeInformationPreview = Object.assign(this.storeInformationPreview, this.appService.storeFormObject);

  }

  submit() {
    console.log('submitted');
    console.log(this.storeForm.value);
    this.formSubmitted = true;

  }

}
