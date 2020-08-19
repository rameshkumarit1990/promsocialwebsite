import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'string-field',
    templateUrl: './string-field.component.html',
    styleUrls: ['./string-field.component.scss']
})
export class StringFieldComponent implements OnInit {

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
