import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NumericFieldComponent } from '../components/form-fields/numeric-field/numeric-field.component';
import { StringFieldComponent } from '../components/form-fields/string-field/string-field.component';
import { PhoneNumberFieldComponent } from '../components/form-fields/phone-number/phone-number-field.component';
import { ImageFieldComponent } from '../components/form-fields/image-field/image-field.component';
import { MultipleImageFieldComponent } from '../components/form-fields/multiple-image-field/multiple-image-field.component';
import { TextAreaFieldComponent } from '../components/form-fields/text-area-field/text-area-field.component';
import { DropdownFieldComponent } from '../components/form-fields/dropdown-field/dropdown-field.component';
import { CheckboxFieldComponent } from '../components/form-fields/checkbox-field/checkbox-field.component';
import { GroupCheckboxComponent } from '../components/form-fields/group-checkbox/group-checkbox.component';
import { VideoFieldComponent } from '../components/form-fields/video-field/video-field.component';
import { AddressFeildComponent } from '../components/form-fields/address-feild/address-feild.component';

const components = {
    string: StringFieldComponent,
    singleImage: ImageFieldComponent,
    textArea: TextAreaFieldComponent,
    phoneNumber: PhoneNumberFieldComponent,
    number: NumericFieldComponent,
    dropdown: DropdownFieldComponent,
    checkbox: CheckboxFieldComponent,
    groupCheckbox: GroupCheckboxComponent,
    video: VideoFieldComponent,
    multipleImage: MultipleImageFieldComponent,
    address: AddressFeildComponent,
};

@Directive({
    selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {

    component;

    @Input()
    config;

    @Input()
    group: FormGroup;


    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef,
    ) { }

    ngOnInit() {
        const component = components[this.config.fieldType];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
        // this.component.instance.group = this.group;
    }
}
