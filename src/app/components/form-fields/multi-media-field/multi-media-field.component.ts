import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'multi-media-field',
  templateUrl: './multi-media-field.component.html',
  styleUrls: ['./multi-media-field.component.scss']
})
export class MultiMediaFieldComponent implements OnInit {

  // config: any;
  group: FormGroup;

  config: any = {
    id: 'demo',
    fieldLabel: 'Upload File',
    buttonLabel: 'Choose File',
    fileType: 'jpg',
    multiple: true,
    type: 'image',
    mode: 'image/*',
    // type: 'video',
    // mode: 'video/*'
  };
  errorMessage: string = '';
  selectedFiles: any = []

  constructor() { }

  ngOnInit(): void {
  }

  onSelectFile(event: any) {
    const file = event.target.files;
    if (file && file.length) {
      for (var i = 0; i < file.length; i++) {
        const fileExists = _.findIndex(this.selectedFiles, function (obj: any) {
          return obj.name == file[i].name;
        })
        var fileType = file[i].name.match(/\.([^\.]+)$/)[1];
        const isExpectedType = this.config.fileType == 'any' ? true : fileType == this.config.fileType;
        if (fileExists == -1 && isExpectedType) {
          this.selectedFiles.push({ type: '', name: '', src: '' });
          const position = this.selectedFiles.length - 1;
          this.selectedFiles[position]['type'] = fileType;
          this.selectedFiles[position]['name'] = file[i].name;
          var reader = new FileReader();
          reader.readAsDataURL(file[i]);
          reader.onload = (response: any) => {
            this.selectedFiles[position]['src'] = response.target.result;
          }
        } else {
          this.errorMessage = `Please Upload Valid ${this.config.fileType} File Types.`;
        };
      }
    }
  }

  deleteImage(index) {
    this.selectedFiles.splice(index, 1);
  }
}