import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AfuiIconModule } from '../shared/afui-icon/afui-icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { AfuiStructuresComponent } from './afui-structures.component';
import { AfUiFormsModule } from '../afui-forms/afui-forms.module';
import { FormsModule } from '@angular/forms';
import { AfuiStructuresInstructions } from '../models/afui-structures.model';
import { AfuiSeparationOfTimesComponent } from '../afui-separation-of-times/afui-separation-of-times.component';
import { AfuiRoundingTimesComponent } from '../afui-rounding-times/afui-rounding-times.component';

export default {
  title: 'Example/Structures',
  component: AfuiStructuresComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [
        AfuiStructuresComponent,
        AfuiSeparationOfTimesComponent,
        AfuiRoundingTimesComponent,
      ],
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
  `afui-structures {  
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

const defaultTemplate = `<afui-structures [structuresInstructions]="structuresInstructions"></afui-structures>`;

export const Default = () => ({
  component: AfuiStructuresComponent,
  template: defaultTemplate,
  styles: defaultStyle,
  props: {
    structuresInstructions: {
      amountOfAircraftInTheStructure: null,
      separationOfTimes: {
        typeSeparationOfTimes: null,
        separationWindowTime: null,
      },
      roundingTimes: {
        typeSeparationOfTimes: null,
        timeToRounding: null,
      },
    },
  },
});
