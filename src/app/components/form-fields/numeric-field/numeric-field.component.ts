import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import * as _ from 'lodash';

@Component({
    selector: 'numeric-field',
    templateUrl: './numeric-field.component.html',
    styleUrls: ['./numeric-field.component.scss']
})
export class NumericFieldComponent implements OnInit {

    config;
    group: FormGroup;

    constructor() { }

    ngOnInit() {
        const validations = [];

        if (this.config.isRequired) { validations.push(Validators.required); }
        this.group.get(this.config.id).setValidators(validations);
        this.group.get(this.config.id).updateValueAndValidity();
    }

    onFocus() {
    }

    onBlur() {
    }
}
