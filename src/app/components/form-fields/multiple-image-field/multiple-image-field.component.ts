import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'multiple-image-field',
  templateUrl: './multiple-image-field.component.html',
  styleUrls: ['./multiple-image-field.component.scss']
})
export class MultipleImageFieldComponent implements OnInit {

  config: any = {
    id: 'dded',
    meta: {
      buttonLabel: 'Upload Images',
      fieldLabel: 'Multiple Images'
    }
  };
  group: FormGroup;
  imageString: any;
  selectedFiles: any = []
  uploading: any = {
    progress: false,
    status: false
  };
  imageInfo: any;
  errorMessage: string = '';

  constructor() { }

  ngOnInit() {
    const validations = [];
    // if (this.config.isRequired) { validations.push(Validators.required); }
    // this.group.get(this.config.id).setValidators(validations);
    // this.group.get(this.config.id).updateValueAndValidity();
  }

  uploadImage(imageInput: any) {
    const image: File = imageInput.target;
    if (image['files'].length > 0) {
      for (var i = 0; i < image['files'].length; i++) {
        const exists = _.findIndex(this.selectedFiles, function (o) { return o.name == image['files'][i].name; })
        if (exists == -1) {
          var imageType = image['files'][i].name.match(/\.([^\.]+)$/)[1];
          this.selectedFiles.push({ type: '', name: '', src: '' });
          const position = this.selectedFiles.length - 1;
          this.selectedFiles[position]['type'] = imageType;
          this.selectedFiles[position]['name'] = image['files'][i].name;
          if (imageType == 'jpg' || imageType == 'png' || imageType == 'jpeg') {
            this.getBase64Image(image['files'][i], position);
          } else {
            console.log("error", 'Please upload only Images');
          }
        };
      }
    }
  }

  getBase64Image(file, index) {
    let me = this;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      var image: any = new Image();
      image.src = reader.result;
      image.onload = function () {
        me.imageString = reader.result;
        me.selectedFiles[index]['src'] = reader.result;
        me.group.get(me.config.id).setValue(me.selectedFiles);
        // var height = this['height'];
        // var width = this['width'];
        // if ((height >= 150 && width >= 150) && (height <= 500 && width <= 500)) {
        //     if (height == width) {
        //         me.imageString = reader.result;
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

  deleteImage(index) {
    this.selectedFiles.splice(index, 1);
  }
}
