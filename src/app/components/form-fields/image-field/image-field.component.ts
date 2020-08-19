import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
    selector: 'image-field',
    templateUrl: './image-field.component.html',
    styleUrls: ['./image-field.component.scss']
})
export class ImageFieldComponent implements OnInit {

    config: any;
    group: FormGroup;
    imageString: any;
    selectedFile: any = {
        src: '',
        type: '',
        name: ''
    };
    uploading: any = {
        progress: false,
        status: false
    };
    imageInfo: any;
    errorMessage: string = '';


    constructor() { }

    ngOnInit() {
        const validations = [];
        if (this.config.isRequired) { validations.push(Validators.required); }
        this.group.get(this.config.id).setValidators(validations);
        this.group.get(this.config.id).updateValueAndValidity();
    }

    uploadImage(imageInput: any) {
        const image: File = imageInput.target;
        if (image['files'].length > 0) {
            var imageType = image['files'][0].name.match(/\.([^\.]+)$/)[1];
            this.selectedFile['type'] = imageType;
            this.selectedFile['name'] = image['files'][0].name;
            if (imageType == 'jpg' || imageType == 'png' || imageType == 'jpeg') {
                this.errorMessage = '';
                this.getBase64Image(image['files'][0]);
            } else {
                this.errorMessage = `Please Upload Valid File Types.`;
            }
        }
    }

    getBase64Image(file) {
        let me = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            var image: any = new Image();
            image.src = reader.result;
            image.onload = function () {
                me.imageString = reader.result;
                me.selectedFile['src'] = reader.result;
                me.group.get(me.config.id).setValue(me.imageString);
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
            me.errorMessage = `Please Upload Valid File Types.`;
        };
    }

    // processFile(imageInput: any) {
    //     const file: File = imageInput.files[0];
    //     const reader = new FileReader();
    //     reader.addEventListener('load', (event: any) => {
    //         // this.selectedFile = new ImageSnippet(event.target.result, file);
    //         const res = this.uploadImage(this.selectedFile.file);
    //         if (res) {
    //             this.selectedFile['status'] = 'ok';
    //         }
    //     });
    //     reader.readAsDataURL(file);
    // }

    // uploadImage(image: File) {
    //     const formData = new FormData();
    //     formData.append('image', image);
    //     return formData;
    // }
}
