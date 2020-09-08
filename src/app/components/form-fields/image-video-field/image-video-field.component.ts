import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
    selector: 'image-video-field',
    templateUrl: './image-video-field.component.html',
    styleUrls: ['./image-video-field.component.scss']
})
export class ImageVideoFieldComponent {
    @Input() config;
    @Input() group;
    base64String;
    format;

    constructor() { }

    onSelectFile(event) {
        const file = event.target.files && event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            if (file.type.indexOf("image/jpeg") > -1 || file.type.indexOf("video/mp4") > -1) {
                this.format = file.type;
                reader.onload = (event) => {
                    this.base64String = (<FileReader>event.target).result;
                    this.group.get(this.config.id).setValue(this.base64String);
                }

            }
        }
    }

}
