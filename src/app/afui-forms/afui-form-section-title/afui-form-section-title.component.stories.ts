import { number, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { AfuiFormSectionTitleComponent } from './afui-form-section-title.component';


export default {
  title: 'Forms/Form Section Title',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [],
      declarations: [AfuiFormSectionTitleComponent]
    })
  ]
};

export const Default = () => ({
  component: AfuiFormSectionTitleComponent,
  template: `<div [style.width]="width+'px'"><afui-form-section-title>{{title}}</afui-form-section-title></div>`,
  props: {
    title: text('title', 'כותרת'),
    width: number('width', 180, { range: true, min: 60, max: 300, step: 10 })
  }
});

export const Customized = () => ({
  component: AfuiFormSectionTitleComponent,
  template: `<div [style.width]="width+'px'"><afui-form-section-title>{{title}}</afui-form-section-title></div>`,
  props: {
    title: text('title', 'כותרת'),
    width: number('width', 180, { range: true, min: 60, max: 300, step: 10 })
  }
});

Customized.story = {
  parameters: {
    cssVariablesKnobs: [
      { variable: '--afui-form-section-title-color', type: 'color', initialValue: '#c1c1c1c1' },
      { variable: '--afui-form-section-title-hr-color', type: 'color', initialValue: '#c1c1c1c1' },
      { variable: '--afui-form-section-title-font-size', type: 'text', initialValue: '1em' },
      { variable: '--afui-form-section-title-font-family', type: 'text', initialValue: 'Arial' }
    ]
  }
};
