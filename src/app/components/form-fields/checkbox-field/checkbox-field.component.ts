import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
    selector: 'checkbox-field',
    templateUrl: './checkbox-field.component.html',
    styleUrls: ['./checkbox-field.component.scss']
})
export class CheckboxFieldComponent implements OnInit {

    config;
    group: FormGroup;

    constructor() { }

    ngOnInit() {
        const validations = [];
        if (this.config.isRequired) { validations.push(Validators.required); }
        this.group.get(this.config.id).setValidators(validations);
        this.group.get(this.config.id).updateValueAndValidity();
    }
}
