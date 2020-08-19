import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'group-checkbox',
  templateUrl: './group-checkbox.component.html',
  styleUrls: ['./group-checkbox.component.scss']
})
export class GroupCheckboxComponent implements OnInit {

  config;
  group: FormGroup;
  checkedList: any = [];
  allComplete: boolean = false;
  partialCheck: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const validations = [];
    if (this.config.isRequired) { validations.push(Validators.required); }
    this.group.get(this.config.id).setValidators(validations);
    this.group.get(this.config.id).updateValueAndValidity();
  }

  onOptionChange(option, event) {
    const { meta: { groupOption } } = this.config
    if (event.checked && this.checkedList.indexOf(option.name) === -1) {
      this.checkedList.push(option.name);
    } else {
      for (let i = 0; i < groupOption.listValues.length; i++) {
        if (this.checkedList[i] === option.name) {
          this.checkedList.splice(i, 1);
        }
      }
    }
    groupOption.listValues.forEach(element => {
      if (element.name === option.name) {
        element.selected = event.checked
      }
    });
    this.setCheckValidations();
    this.group.get(this.config.id).setValue(this.checkedList);
  }

  selectAll(allSelected: boolean) {
    const { meta: { groupOption } } = this.config
    this.checkedList = [];
    this.allComplete = allSelected;
    if (groupOption.listValues == null) {
      return;
    }
    groupOption.listValues.forEach(t => t.selected = allSelected);
    if (allSelected) {
      groupOption.listValues.forEach(item => {
        this.checkedList.push(item.name);
      });
    }
    this.setCheckValidations();
    this.group.get(this.config.id).setValue(this.checkedList);
  }

  setCheckValidations() {
    const { meta: { groupOption } } = this.config
    if (this.checkedList.length == groupOption.listValues.length) {
      this.allComplete = true;
      this.partialCheck = false;
    } else if (this.checkedList.length) {
      this.allComplete = false;
      this.partialCheck = true;
    } else {
      this.allComplete = false;
      this.partialCheck = false;
    }
  }
}