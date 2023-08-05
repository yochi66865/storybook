import { withKnobs } from '@storybook/addon-knobs';
import { Meta, moduleMetadata } from '@storybook/angular';
import { AfuiStructuresModule } from '../afui-structures.module';
import { AfuiSeparationOfTimesComponent } from './afui-separation-of-times.component';
import { FormGroup } from '@angular/forms';

export default {
  title: 'Example/Separation Of Times',
  component: AfuiSeparationOfTimesComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AfuiStructuresModule],
    }),
  ],
} as Meta;

const defaultStyle = [
  `separation-of-times {  
    position: absolute;
    left: 100px;
    top: 100px;
    width: 640px;
    height: 90px;
    background: #FFFFFF;
    direction: rtl;
    border: 1px solid red;
    display:flex; 
  } `,
];

const defaultTemplate = `<form [formGroup]="form"><separation-of-times>
</separation-of-times></form>`;

export const Default = () => ({
  component: AfuiSeparationOfTimesComponent,
  template: defaultTemplate,
  styles: defaultStyle,
  props: {
    form: new FormGroup({}),
  },
});
