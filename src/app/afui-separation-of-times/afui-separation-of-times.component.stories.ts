import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AfuiIconModule } from '../shared/afui-icon/afui-icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { AfuiSeparationOfTimesComponent } from './afui-separation-of-times.component';
import { AfUiFormsModule } from '../afui-forms/afui-forms.module';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Example/Separation Of Times',
  component: AfuiSeparationOfTimesComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [AfuiSeparationOfTimesComponent],
      imports: [
        FormsModule,
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
  `afui-separation-of-times {  
    position: absolute;
    left: 100px;
    top: 100px;
    width: 649px;
    height: 259px;
    background: #FFFFFF;
    direction: rtl;
    border: 1px solid red;
    display:flex; 
  } `,
];

const defaultTemplate = `<afui-separation-of-times [separationOfTimes]=separationOfTimes></afui-separation-of-times>`;

export const Default = () => ({
  component: AfuiSeparationOfTimesComponent,
  template: defaultTemplate,
  styles: defaultStyle,
  props: {
    separationOfTimes: {
      typeSeparationOfTimes: null,
      separationWindowTime: null,
    },
  },
});
