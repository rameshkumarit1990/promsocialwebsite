import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
// import { InterviewService } from '../../../interview.service';
// import { AccountInterviewService } from '../../../account/account-config/account-interview/account-interview.service';

@Component({
    selector: 'phone-number-field',
    templateUrl: './phone-number-field.component.html',
    styleUrls: ['./phone-number-field.component.scss']
})

export class PhoneNumberFieldComponent implements OnInit {

    config;
    group: FormGroup;

    // expanded: boolean;
    // isSelected: boolean;
    // interviewMode: boolean;
    // selectedQuestion: boolean;
    // extension: any = '';
    // used to display mask and auto fill dashes.
    public mask = [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {

        // this.group.addControl('ext' + this.config.id, this.fb.control(''));
        // const currentAnswerValue = this.group.get(this.config.id).value;
        // let extensionValue = '';
        // let finalAnswerValue = '';
        // if value>12, then phonenumber has extension, whose input value is filled by splitting the answer value.
        // if (currentAnswerValue.length > 12) {
        //     const answerValueSplit = currentAnswerValue.split('-');

        //     answerValueSplit.forEach((eachSplit, index) => {
        //         if (index < 3) {
        //             finalAnswerValue = finalAnswerValue ? finalAnswerValue + '-' + eachSplit : eachSplit;
        //         } else {
        //             extensionValue = eachSplit;
        //         }
        //     });
        // }
        // if (finalAnswerValue) {
        //     this.group.get(this.config.id).setValue(finalAnswerValue);
        // }
        // if (extensionValue) {
        //     this.group.get('ext' + this.config.id).setValue(extensionValue);
        // }

        const validations = [Validators.pattern(/^\d{3}-?\d{3}-?\d{4}$/)];
        if (this.config.isRequired) {
            validations.push(Validators.required);
        }
        this.group.get(this.config.id).setValidators(validations);
        this.group.get(this.config.id).updateValueAndValidity();
    }

    onFocus() {
        // if (!this.interviewService.isReadOnly) {
        //     if (this.interviewMode) {
        //         this.isSelected = true;
        //         this.interviewService.callPreActions(this.config);
        //     }
        // }
    }

    onBlur() {
        // if (!this.interviewService.isReadOnly) {
        //     const fieldControl = this.group.get(this.config.id);
        //     if (this.interviewMode && fieldControl && fieldControl.dirty && fieldControl.valid) {
        //         this.isSelected = false;
        //         this.interviewService.updateInterviewJson(this.config);
        //         this.interviewService.callPostActions(this.config);
        //     }
        // }
    }

    // formatQuestionText(questionText) {
    //     if (!this.interviewMode) {
    //         return questionText;
    //     } else {
    //         return this.interviewService.formattedQuestionText(questionText);
    //     }
    // }

    // selectQuestion() {
    //     this.accountInterviewService.selectPreviewQuestion({question: this.config});
    // }
}
