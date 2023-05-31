import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AfuiErrorDirective } from '../afui-forms/afui-error/afui-error.directive';
import { AfUiFieldLabelDirective } from '../afui-forms/afui-field-label/afui-field-label.directive';
import { AfUiFormsModule } from '../afui-forms/afui-forms.module';
import { AfuiIconSuffixDirective } from '../afui-forms/afui-icon-suffix/afui-icon-suffix.directive';
import { AfUiInputDirective } from '../afui-forms/afui-input/afui-input.directive';
import { AfuiIconModule } from '../shared/afui-icon/afui-icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { AfuiSelectAlternativeComponent } from './afui-select-alternative.component';

export default {
  title: 'Example/AfuiSelectAlternativeComponent',
  component: AfuiSelectAlternativeComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [AfuiSelectAlternativeComponent],
      imports: [
        BrowserAnimationsModule,
        DemoMaterialModule,
        HttpClientModule,
        AfuiIconModule,
        AfUiFormsModule,
      ],
    }),
  ],
} as Meta;

const defaultStyle = [
  `afui-select-alternative {  width: 187px; height:245px; display: flex } `,
];

const defaultTemplate = `<afui-select-alternative [headQuarters]="headQuarters" 
[alternatives]="alternatives">
</afui-select-alternative>`;

export const Default = () => ({
  component: AfuiSelectAlternativeComponent,
  template: defaultTemplate,
  styles: defaultStyle,
  props: {
    headQuarters: [`פד"ן`, `פצ"ן`, `חיל הים`, `מפקע"ר`],
    alternatives: [`'ח. זרועית ה`, `'ח. זרועית ד`],
  },
});
