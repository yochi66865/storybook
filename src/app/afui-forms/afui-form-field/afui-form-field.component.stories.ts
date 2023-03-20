import { TextFieldModule } from '@angular/cdk/text-field';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  array,
  boolean,
  number,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AfuiIconModule } from '../../shared/afui-icon/afui-icon.module';
import { AfuiErrorDirective } from '../afui-error/afui-error.directive';
import { AfUiFieldLabelDirective } from '../afui-field-label/afui-field-label.directive';
import { AfuiIconSuffixDirective } from '../afui-icon-suffix/afui-icon-suffix.directive';
import { AfUiInputDirective } from '../afui-input/afui-input.directive';
import { AfUiFormFieldComponent } from './afui-form-field.component';

export default {
  title: 'Forms/Form Field',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        MatSelectModule,
        MatOptionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgxMaterialTimepickerModule,
        AfuiIconModule,
        TextFieldModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        AfUiFormFieldComponent,
        AfUiInputDirective,
        AfuiErrorDirective,
        AfUiFieldLabelDirective,
        AfuiIconSuffixDirective,
      ],
    }),
  ],
};

export const Input = () => ({
  component: AfUiFormFieldComponent,
  template: `<afui-form-field>
                <span afui-field-label>{{label}}</span>
                <input afui-input [value]="value" [placeholder]="placeholder">
                <span *ngIf="displayError" afui-error>{{errorText}}</span>
             </afui-form-field>`,
  props: {
    label: text('label', 'כותרת'),
    value: text('value', ''),
    placeholder: text('placeholder', 'הקלד'),
    displayError: boolean('display error', false),
    errorText: text('error text', 'שגיאה'),
  },
});

export const InputCustomized = () => ({
  component: AfUiFormFieldComponent,
  template: `<afui-form-field>
                <span afui-field-label *ngIf="displayLabel">{{label}}</span>
                <input afui-input [value]="value" [placeholder]="placeholder">
                <span *ngIf="displayError" afui-error>{{errorText}}</span>
             </afui-form-field>`,
  props: {
    label: text('label', 'כותרת'),
    displayLabel: boolean('displayLabel', true),
    value: text('value', ''),
    placeholder: text('placeholder', 'הקלד'),
    displayError: boolean('display error', false),
    errorText: text('error text', 'שגיאה'),
  },
});

InputCustomized.story = {
  parameters: {
    cssVariablesKnobs: [
      {
        variable: '--afui-form-field-afui-input-color',
        type: 'color',
        initialValue: '#424242',
      },
      {
        variable: '--afui-form-field-afui-input-background-color',
        type: 'color',
        initialValue: '#ffffff',
      },
      {
        variable: '--afui-form-field-afui-input-disabled-background-color',
        type: 'color',
        initialValue: '#F0F0F0',
      },
      {
        variable: '--afui-form-field-afui-input-placeholder-color',
        type: 'color',
        initialValue: '#CCCCCC',
      },
      {
        variable: '--afui-form-field-afui-field-label-color',
        type: 'color',
        initialValue: '#8a8a8a',
      },
      {
        variable: '--afui-form-field-font-size',
        type: 'text',
        initialValue: '1em',
      },
      {
        variable: '--afui-form-field-font-family',
        type: 'text',
        initialValue: 'Arial',
      },
    ],
  },
};

export const TextArea = () => ({
  component: AfUiFormFieldComponent,
  template: `<afui-form-field>
                <span afui-field-label>{{label}}</span>
                <textarea afui-input cdkTextareaAutosize [cdkAutosizeMinRows]="minRows" [cdkAutosizeMaxRows]="maxRows" [placeholder]="placeholder">{{value}}</textarea>
                <span *ngIf="displayError" afui-error>{{errorText}}</span>
             </afui-form-field>`,
  props: {
    label: text('label', 'כותרת'),
    value: text('value', ''),
    placeholder: text('placeholder', 'הקלד'),
    minRows: number('minimum rows', 3),
    maxRows: number('maximum rows', 5),
    displayError: boolean('display error', false),
    errorText: text('error text', 'שגיאה'),
  },
});

export const TextAreaCustomized = () => ({
  component: AfUiFormFieldComponent,
  template: `<afui-form-field>
                <span afui-field-label>{{label}}</span>
                <textarea afui-input cdkTextareaAutosize [cdkAutosizeMinRows]="minRows" [cdkAutosizeMaxRows]="maxRows" [placeholder]="placeholder">{{value}}</textarea>
                <span *ngIf="displayError" afui-error>{{errorText}}</span>
             </afui-form-field>`,
  props: {
    label: text('label', 'כותרת'),
    value: text('value', ''),
    placeholder: text('placeholder', 'הקלד'),
    minRows: number('minimum rows', 3),
    maxRows: number('maximum rows', 5),
    displayError: boolean('display error', false),
    errorText: text('error text', 'שגיאה'),
  },
});

TextAreaCustomized.story = {
  parameters: {
    cssVariablesKnobs: [
      {
        variable: '--afui-form-field-afui-input-color',
        type: 'color',
        initialValue: '#424242',
      },
      {
        variable: '--afui-form-field-afui-input-background-color',
        type: 'color',
        initialValue: '#ffffff',
      },
      {
        variable: '--afui-form-field-afui-input-disabled-background-color',
        type: 'color',
        initialValue: '#F0F0F0',
      },
      {
        variable: '--afui-form-field-afui-input-placeholder-color',
        type: 'color',
        initialValue: '#CCCCCC',
      },
      {
        variable: '--afui-form-field-afui-field-label-color',
        type: 'color',
        initialValue: '#8a8a8a',
      },
      {
        variable: '--afui-form-field-font-size',
        type: 'text',
        initialValue: '1em',
      },
      {
        variable: '--afui-form-field-font-family',
        type: 'text',
        initialValue: 'Arial',
      },
    ],
  },
};

export const SelectDropdown = () => ({
  component: AfUiFormFieldComponent,
  template: `<afui-form-field>
                <span afui-field-label>{{label}}</span>
                <mat-select afui-input [placeholder]="placeholder">
                  <mat-option *ngFor="let option of values" [value]="option">{{option}}</mat-option>
                </mat-select>
                <span *ngIf="displayError" afui-error>{{errorText}}</span>
             </afui-form-field>`,
  props: {
    label: text('label', 'כותרת'),
    values: array('options', ['שלום', 'עולם']),
    placeholder: text('placeholder', 'בחר'),
    displayError: boolean('display error', false),
    errorText: text('error text', 'שגיאה'),
  },
  styles: [`mat-select{min-width:100px}`],
});

export const SelectDropdownCustomized = () => ({
  component: AfUiFormFieldComponent,
  template: `<afui-form-field>
                <span afui-field-label>{{label}}</span>
                <mat-select afui-input [placeholder]="placeholder">
                  <mat-option *ngFor="let option of values" [value]="option">{{option}}</mat-option>
                </mat-select>
                <span *ngIf="displayError" afui-error>{{errorText}}</span>
             </afui-form-field>`,
  props: {
    label: text('label', 'כותרת'),
    values: array('options', ['שלום', 'עולם']),
    placeholder: text('placeholder', 'בחר'),
    displayError: boolean('display error', false),
    errorText: text('error text', 'שגיאה'),
  },
  styles: [`mat-select{min-width:100px}`],
});

SelectDropdownCustomized.story = {
  parameters: {
    cssVariablesKnobs: [
      {
        variable: '--afui-form-field-afui-input-background-color',
        type: 'color',
        initialValue: '#ffffff',
      },
      {
        variable: '--afui-form-field-afui-input-disabled-background-color',
        type: 'color',
        initialValue: '#F0F0F0',
      },
      {
        variable: '--afui-form-field-afui-field-label-color',
        type: 'color',
        initialValue: '#8a8a8a',
      },
      {
        variable: '--afui-form-field-font-size',
        type: 'text',
        initialValue: '1em',
      },
      {
        variable: '--afui-form-field-font-family',
        type: 'text',
        initialValue: 'Arial',
      },
    ],
  },
};

export const DatePicker = () => ({
  component: AfUiFormFieldComponent,
  template: `<afui-form-field>
                <span afui-field-label>{{label}}</span>
                 <input afui-input [matDatepicker]="picker" [placeholder]="placeholder" (click)="picker.open()">
                 <mat-icon *ngIf="withIcon" afui-icon-suffix svgIcon="schedule2" (click)="picker.open()"></mat-icon>
                 <mat-datepicker #picker></mat-datepicker>
                <span *ngIf="displayError" afui-error>{{errorText}}</span>
             </afui-form-field>`,
  props: {
    label: text('label', 'כותרת'),
    placeholder: text('placeholder', 'בחר תאריך'),
    displayError: boolean('display error', false),
    errorText: text('error text', 'שגיאה'),
    withIcon: boolean('with icon', true),
  },
});

export const DatePickerCustomized = () => ({
  component: AfUiFormFieldComponent,
  template: `<afui-form-field>
                <span afui-field-label>{{label}}</span>
                 <input afui-input [matDatepicker]="picker" [placeholder]="placeholder" (click)="picker.open()">
                 <mat-icon *ngIf="withIcon" afui-icon-suffix svgIcon="schedule2" (click)="picker.open()"></mat-icon>
                 <mat-datepicker #picker></mat-datepicker>
                <span *ngIf="displayError" afui-error>{{errorText}}</span>
             </afui-form-field>`,
  props: {
    label: text('label', 'כותרת'),
    placeholder: text('placeholder', 'בחר תאריך'),
    displayError: boolean('display error', false),
    errorText: text('error text', 'שגיאה'),
    withIcon: boolean('with icon', true),
  },
});

DatePickerCustomized.story = {
  parameters: {
    cssVariablesKnobs: [
      {
        variable: '--afui-form-field-afui-input-color',
        type: 'color',
        initialValue: '#424242',
      },
      {
        variable: '--afui-form-field-afui-input-background-color',
        type: 'color',
        initialValue: '#ffffff',
      },
      {
        variable: '--afui-form-field-afui-input-disabled-background-color',
        type: 'color',
        initialValue: '#F0F0F0',
      },
      {
        variable: '--afui-form-field-afui-input-placeholder-color',
        type: 'color',
        initialValue: '#CCCCCC',
      },
      {
        variable: '--afui-form-field-afui-field-label-color',
        type: 'color',
        initialValue: '#8a8a8a',
      },
      {
        variable: '--afui-form-field-font-size',
        type: 'text',
        initialValue: '1em',
      },
      {
        variable: '--afui-form-field-font-family',
        type: 'text',
        initialValue: 'Arial',
      },
    ],
  },
};

export const HourPicker = () => ({
  component: AfUiFormFieldComponent,
  template: `<afui-form-field>
                <span afui-field-label>{{label}}</span>
                 <input afui-input [ngxTimepicker]="toggleTimepicker" [format]="24" [placeholder]="placeholder" readonly>
                 <mat-icon *ngIf="withIcon" afui-icon-suffix svgIcon="clock" (click)="toggleTimepicker.open()"></mat-icon>
                 <ngx-material-timepicker #toggleTimepicker [appendToInput]="appendToInput"></ngx-material-timepicker>
                <span *ngIf="displayError" afui-error>{{errorText}}</span>
             </afui-form-field>`,
  props: {
    label: text('label', 'כותרת'),
    placeholder: text('placeholder', '00:00'),
    appendToInput: boolean('popup next to input', true),
    displayError: boolean('display error', false),
    errorText: text('error text', 'שגיאה'),
    withIcon: boolean('with icon', true),
  },
  styles: [`:host{font-size:15px}`],
});

export const HourPickerCustomized = () => ({
  component: AfUiFormFieldComponent,
  template: `<afui-form-field>
                <span afui-field-label>{{label}}</span>
                 <input afui-input [ngxTimepicker]="toggleTimepicker" [format]="24" [placeholder]="placeholder" readonly>
                 <mat-icon *ngIf="withIcon" afui-icon-suffix svgIcon="clock" (click)="toggleTimepicker.open()"></mat-icon>
                 <ngx-material-timepicker #toggleTimepicker [appendToInput]="appendToInput"></ngx-material-timepicker>
                <span *ngIf="displayError" afui-error>{{errorText}}</span>
             </afui-form-field>`,
  props: {
    label: text('label', 'כותרת'),
    placeholder: text('placeholder', '00:00'),
    appendToInput: boolean('popup next to input', true),
    displayError: boolean('display error', false),
    errorText: text('error text', 'שגיאה'),
    withIcon: boolean('with icon', true),
  },
  styles: [`:host{font-size:15px}`],
});

HourPickerCustomized.story = {
  parameters: {
    cssVariablesKnobs: [
      {
        variable: '--afui-form-field-afui-input-color',
        type: 'color',
        initialValue: '#424242',
      },
      {
        variable: '--afui-form-field-afui-input-background-color',
        type: 'color',
        initialValue: '#ffffff',
      },
      {
        variable: '--afui-form-field-afui-input-disabled-background-color',
        type: 'color',
        initialValue: '#F0F0F0',
      },
      {
        variable: '--afui-form-field-afui-input-placeholder-color',
        type: 'color',
        initialValue: '#CCCCCC',
      },
      {
        variable: '--afui-form-field-afui-field-label-color',
        type: 'color',
        initialValue: '#8a8a8a',
      },
      {
        variable: '--afui-form-field-font-size',
        type: 'text',
        initialValue: '1em',
      },
      {
        variable: '--afui-form-field-font-family',
        type: 'text',
        initialValue: 'Arial',
      },
    ],
  },
};
