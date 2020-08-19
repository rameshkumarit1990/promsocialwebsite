import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
    selector: 'video-field',
    templateUrl: './video-field.component.html',
    styleUrls: ['./video-field.component.scss']
})
export class VideoFieldComponent implements OnInit {


    config: any;
    group: FormGroup;
    url;
    format;


    onSelectFile(event) {
        const file = event.target.files && event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            if (file.type.indexOf('video') > -1) {
                this.format = 'video';
                reader.onload = (event) => {
                    this.url = (<FileReader>event.target).result;
                    this.group.get(this.config.id).setValue(this.url);
                }

            }
        }
    }

    constructor() { }

    ngOnInit() {

    }


}
