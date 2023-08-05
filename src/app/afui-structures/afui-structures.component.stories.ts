import { withKnobs } from '@storybook/addon-knobs';
import { Meta, moduleMetadata } from '@storybook/angular';
import { AfuiStructuresComponent } from './afui-structures.component';
import { AfuiStructuresModule } from './afui-structures.module';
import { FormGroup } from '@angular/forms';

export default {
  title: 'Example/Structures',
  component: AfuiStructuresComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AfuiStructuresModule],
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

const defaultTemplate = `<form #ff class="container mt-3" (ngSubmit)="onSubmit(ff)" [formGroup]="form">
<afui-structures [structuresInstructions]="structuresInstructions"></afui-structures></form>`;

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
    onSubmit: (form: any) => {
      console.log('form', form);
    },
    form: new FormGroup({}),
  },
});
