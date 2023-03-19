import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { AfUiFormsModule } from '../afui-forms.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export default {
  title: 'Forms/Form Slide Toggle',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AfUiFormsModule, MatSlideToggleModule],
    }),
  ],
};

export const Default = () => ({
  template: `<mat-slide-toggle afui-slide-toggle disableRipple></mat-slide-toggle>`,
});

export const Customized = () => ({
  template: `<mat-slide-toggle afui-slide-toggle disableRipple></mat-slide-toggle>`,
});

Customized.story = {
  parameters: {
    cssVariablesKnobs: [
      { variable: '--afui-slide-toggle-bar-width', type: 'text', initialValue: '50px' },
      { variable: '--afui-slide-toggle-bar-height', type: 'text', initialValue: '30px' },
      { variable: '--afui-slide-toggle-bar-background-color', type: 'color', initialValue: '#bbb' },
      { variable: '--afui-slide-toggle-bar-border-radius', type: 'text', initialValue: '50px' },
      { variable: '--afui-slide-toggle-bar-checked-background-color', type: 'color', initialValue: '#4ed164' },
      { variable: '--afui-slide-toggle-thumb-width', type: 'text', initialValue: '26px' },
      { variable: '--afui-slide-toggle-thumb-height', type: 'text', initialValue: '26px' },
      { variable: '--afui-slide-toggle-thumb-box-shadow', type: 'text', initialValue: '2px 4px 6px rgba(0, 0, 0, 0.2)' },
      { variable: '--afui-slide-toggle-thumb-checked-background-color', type: 'color', initialValue: '#fff' },
      { variable: '--afui-slide-toggle-thumb-background-color', type: 'color', initialValue: '#fff' },
      { variable: '--afui-slide-toggle-thumb-left', type: 'text', initialValue: '3px' },
      { variable: '--afui-slide-toggle-thumb-top', type: 'text', initialValue: '2px' },
      { variable: '--afui-slide-toggle-thumb-checked-left', type: 'text', initialValue: '6px' },
    ],
  },
};