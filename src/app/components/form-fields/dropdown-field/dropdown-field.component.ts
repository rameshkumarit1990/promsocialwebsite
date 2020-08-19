import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
    selector: 'dropdown-field',
    templateUrl: './dropdown-field.component.html',
    styleUrls: ['./dropdown-field.component.scss']
})
export class DropdownFieldComponent implements OnInit {

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
