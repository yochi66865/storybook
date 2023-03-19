import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { AfuiIconModule } from '../../afui-icon/afui-icon.module';
import { AfuiTamiPlanFormComponent } from '../../afui-tami/afui-tami-plan-form/afui-tami-plan-form.component';
import { AfuiFormContainerComponent } from './afui-form-container.component';


export default {
  title: 'Forms/Form Container',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AfuiIconModule],
      declarations: [AfuiFormContainerComponent]
    })
  ]
};

export const Default = () => ({
  component: AfuiTamiPlanFormComponent,
  template: `<afui-form-container [title]="title"><div body>{{body}}</div></afui-form-container>`,
  props: {
    title: text('title', 'Headline'),
    body: text('body', 'hello world')
  },
  styles: [`div {max-width:500px; max-height:400px;}`]
});

export const Customized = () => ({
  component: AfuiTamiPlanFormComponent,
  template: `<afui-form-container [title]="title"><div body>{{body}}</div></afui-form-container>`,
  props: {
    title: text('title', 'Headline'),
    body: text('body', 'hello world')
  },
  styles: [`div {max-width:500px; max-height:400px;}`]
});

Customized.story = {
  parameters: {
    cssVariablesKnobs: [
      { variable: '--afui-form-container-content-background-color', type: 'color', initialValue: '#f7f7f7' },
      { variable: '--afui-form-container-title-bar-background-color', type: 'color', initialValue: '#424242' },
      { variable: '--afui-form-container-font-size', type: 'text', initialValue: '0.5em' },
      { variable: '--afui-form-container-title-bar-font-size', type: 'text', initialValue: '1.5em' },
      { variable: '--afui-form-container-title-bar-text-color', type: 'color', initialValue: '#f7f7f7' },
      { variable: '--afui-form-container-close-icon-color', type: 'color', initialValue: '#000000' },
      { variable: '--afui-form-container-font-family', type: 'text', initialValue: 'Arial' }
    ]
  }
};
