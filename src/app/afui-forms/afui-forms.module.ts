import { NgModule } from '@angular/core';
import { AfuiErrorDirective } from './afui-error/afui-error.directive';
import { AfUiFieldLabelDirective } from './afui-field-label/afui-field-label.directive';
import { AfuiFormContainerComponent } from './afui-form-container/afui-form-container.component';
import { AfUiFormFieldComponent } from './afui-form-field/afui-form-field.component';
import { AfuiFormSectionTitleComponent } from './afui-form-section-title/afui-form-section-title.component';
import { AfuiFormTitleComponent } from './afui-form-title/afui-form-title.component';
import { AfuiIconSuffixDirective } from './afui-icon-suffix/afui-icon-suffix.directive';
import { AfUiInputDirective } from './afui-input/afui-input.directive';
import { AfuiLabelErrorDirective } from './afui-label-error/afui-label-error.directive';
import { AfuiSelectFormFieldDirective } from './afui-select/afui-select-form-field.directive';
import { AfuiSelectDirective } from './afui-select/afui-select.directive';
import { AfuiSlideToggleDirective } from './afui-slide-toggle/afui-slide-toggle.directive';
import { CommonModule } from '@angular/common';
import { AfuiIconPrefixDirective } from './afui-icon-prefix/afui-icon-prefix.directive';
import { AfuiInputPrefixDirective } from './afui-input-prefix/afui-input-prefix.directive';
import { AfuiInputSuffixDirective } from './afui-input-suffix/afui-input-suffix.directive';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfuiFormSelectSearchComponent } from './afui-select-search/afui-form-select-with-search.component';
import { AfuiIconModule } from '../shared/afui-icon/afui-icon.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AfUiInputDirective,
    AfUiFormFieldComponent,
    AfuiFormContainerComponent,
    AfuiFormSectionTitleComponent,
    AfuiFormTitleComponent,
    AfUiFieldLabelDirective,
    AfuiErrorDirective,
    AfuiLabelErrorDirective,
    AfuiIconSuffixDirective,
    AfuiSelectDirective,
    AfuiSelectFormFieldDirective,
    AfuiSlideToggleDirective,
    AfuiIconPrefixDirective,
    AfuiSlideToggleDirective,
    AfuiInputPrefixDirective,
    AfuiInputSuffixDirective,
    AfuiFormSelectSearchComponent,
  ],
  imports: [
    CommonModule,
    AfuiIconModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    AfUiInputDirective,
    AfUiFormFieldComponent,
    AfuiFormContainerComponent,
    AfuiFormSectionTitleComponent,
    AfuiFormTitleComponent,
    AfuiIconSuffixDirective,
    AfUiFieldLabelDirective,
    AfuiErrorDirective,
    AfuiLabelErrorDirective,
    AfuiSelectDirective,
    AfuiSelectFormFieldDirective,
    AfuiSlideToggleDirective,
    AfuiIconPrefixDirective,
    AfuiSlideToggleDirective,
    AfuiInputPrefixDirective,
    AfuiInputSuffixDirective,
    AfuiFormSelectSearchComponent,
  ],
})
export class AfUiFormsModule {}
