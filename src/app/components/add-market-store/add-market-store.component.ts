import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-market-store',
  templateUrl: './add-market-store.component.html',
  styleUrls: ['./add-market-store.component.scss']
})
export class AddMarketStoreComponent implements OnInit {

  addStore: any;
  companyLogo: any;


  constructor(private formBuilder: FormBuilder) {

    this.addStore = this.formBuilder.group({
      name: '',
      description: '',
      address: '',
      opentime: '',
      phone: '',
      costlevel: '',
      tags: '',
      website: '',
      discountcode: '',
      discount_description: '',
      latitude: '',
      longitude: '',
      icon: '',
      cover: '',
      pics: '',
      men: '',
      women: '',
      storeCategory: ''
    })
  }

  // selectStoreCategory(): FormGroup {
  //   return this.formBuilder.group({
  //     accesories: '',
  //     flowers: '',
  //     fragances: '',
  //     hair: ''
  //   });
  // }

  uploadImage(event: any, index: any, type: String) {
    var image = document.getElementById('file' + index);
    if (image['files'].length > 0) {
      var ext = image['files'][0].name.match(/\.([^\.]+)$/)[1];
      if (ext == 'jpg' || ext == 'png' || ext == 'jpeg') {
        this.getBase64Image(image['files'][0], index, type);
      } else {
        console.log("error", 'Please upload only Images');
      }
    }
  }

  getBase64Image(file, i, type) {
    let me = this;
    const index = i;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      // console.log(reader.result);
      var image: any = new Image();
      image.src = reader.result;
      image.onload = function () {
        me.companyLogo = reader.result;
        if (index >= 0) {
          me.addStore.controls[index].controls.image.setValue(me.companyLogo);
        } else {
          me.addStore.controls[type].setValue(me.companyLogo);
        }
        // var height = this['height'];
        // var width = this['width'];
        // if ((height >= 150 && width >= 150) && (height <= 500 && width <= 500)) {
        //     if (height == width) {
        //         me.companyLogo = reader.result;
        //     } else {
        //         alert('Please upload images with same height and width with minimum 150px and maximium 500px dimensions.');
        //     }
        //     return true
        // } else {
        //     alert('Please upload images with same height and width with minimum 150px and maximium 500px dimensions.');
        //     return false;
        // }
      }
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  ngOnInit(): void {
  }

}
