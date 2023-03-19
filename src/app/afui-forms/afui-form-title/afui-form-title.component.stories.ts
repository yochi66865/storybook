import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { AfuiFormTitleComponent } from './afui-form-title.component';

 
export default {
  title: 'Forms/Form Title',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [],
      declarations: [AfuiFormTitleComponent]
    })
  ]
};

export const Default = () => ({
  component: AfuiFormTitleComponent,
  template: `<afui-form-title>{{title}}</afui-form-title>`,
  props: {
    title: text('title', 'כותרת')
  }
});
export const Customized = () => ({
  component: AfuiFormTitleComponent,
  template: `<afui-form-title>{{title}}</afui-form-title>`,
  props: {
    title: text('title', 'כותרת')
  }
});

Customized.story = {
  parameters: {
    cssVariablesKnobs: [
      { variable: '--afui-form-title-color', type: 'color', initialValue: '#525252' },
      { variable: '--afui-form-title-font-size', type: 'text', initialValue: '1.4em' },
      { variable: '--afui-form-title-font-family', type: 'text', initialValue: 'Arial' }
    ]
  }
};
