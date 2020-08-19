import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../../../app.service';


@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

    private _config: any[] = [];

    form: FormGroup;
    constructor(private fb: FormBuilder, public appService: AppService) {
    }

    ngOnInit() {

    }

    createGroup() {
        const group = this.fb.group({});
        this.config.forEach((control) => {
            const controlValue = control.fieldValue ? control.fieldValue : '';
            group.addControl(control.id, this.fb.control(controlValue));
        });
        return group;
    }

    @Input()
    set config(storeData) {
        this._config = storeData;
        this.form = this.createGroup();
        this.appService.setDynamicForm(this.form);
        for (const eachQuestion of storeData) {
            if (this.form.get(eachQuestion.id)) {
                if (eachQuestion.errorData) {
                    this.form.get(eachQuestion.id).setErrors({ 'validationError': eachQuestion.errorMessage });
                } else {
                    this.form.get(eachQuestion.id).setErrors(null);
                }
            }
        }
    }

    get config() {
        return this._config;
    }
}
