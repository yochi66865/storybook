import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { AfuiFormSelectSearchComponent } from './afui-form-select-with-search.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfuiIconModule } from '../../shared/afui-icon/afui-icon.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Forms/Form Select With Search',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        AfuiIconModule,
        BrowserAnimationsModule,
      ],
      declarations: [AfuiFormSelectSearchComponent],
    }),
  ],
};

export const Default = () => ({
  component: AfuiFormSelectSearchComponent,
  template: `<afui-form-select-with-search [options]="options" [defaultSelectedId]="defaultSelectedId"></afui-form-select-with-search>`,
  props: {
    options: [
      {
        parent: { id: '123', value: 'ברג84' },
        children: [
          { id: 'blue1', value: 'כחול' },
          { id: 'red1', value: 'אדום' },
          { id: 'green1', value: 'ירוק' },
        ],
      },
      {
        parent: { id: '124', value: 'ברג82' },
        children: [
          { id: 'yellow1', value: 'צהוב' },
          { id: 'red2', value: 'אדום' },
          { id: 'green2', value: 'ירוק' },
        ],
      },
      {
        parent: { id: '125', value: 'ברג חד' },
        children: [
          { id: 'purpule1', value: 'סגול' },
          { id: 'white1', value: 'לבן' },
          { id: 'black1', value: 'שחור' },
        ],
      },
    ],
    defaultSelectedId: text('defaultSelectedId', '123'),
  },
});
export const Customized = () => ({
  component: AfuiFormSelectSearchComponent,
  template: `<afui-form-select-with-search [options]="options"></afui-form-select-with-search>`,
  props: {
    options: [
      {
        parent: { id: '123', value: 'ברג84' },
        children: [
          { id: 'blue1', value: 'כחול' },
          { id: 'red1', value: 'אדום' },
          { id: 'green1', value: 'ירוק' },
        ],
      },
      {
        parent: { id: '124', value: 'ברג82' },
        children: [
          { id: 'yellow1', value: 'צהוב' },
          { id: 'red2', value: 'אדום' },
          { id: 'green2', value: 'ירוק' },
        ],
      },
      {
        parent: { id: '125', value: 'ברג חד' },
        children: [
          { id: 'purpule1', value: 'סגול' },
          { id: 'white1', value: 'לבן' },
          { id: 'black1', value: 'שחור' },
        ],
      },
    ],
  },
});

Customized.story = {
  parameters: {
    cssVariablesKnobs: [
      {
        variable: '--afui-form-select-search-input-background-color',
        type: 'color',
        initialValue: 'rgb(32, 32, 32)',
      },
      {
        variable: '--default-afui-form-select-search-input-text-color',
        type: 'color',
        initialValue: 'white',
      },
      {
        variable: '--afui-form-select-search-input-width',
        type: 'text',
        initialValue: '7em',
      },
      {
        variable: '--afui-form-select-search-input-height',
        type: 'text',
        initialValue: '2em',
      },
      {
        variable: '--afui-form-select-search-input-padding-right',
        type: 'text',
        initialValue: '0.5em',
      },
      {
        variable: '--afui-form-select-search-input-border-radius',
        type: 'text',
        initialValue: '1em',
      },
      {
        variable: '--afui-form-select-search-input-font-size',
        type: 'text',
        initialValue: '1em',
      },
      {
        variable: '--afui-form-select-search-option-background-color',
        type: 'color',
        initialValue: 'rgb(32, 32, 32)',
      },
      {
        variable: '--afui-form-select-search-option-text-color',
        type: 'color',
        initialValue: 'white',
      },
      {
        variable: '--afui-form-select-search-option-height',
        type: 'text',
        initialValue: '2em',
      },
      {
        variable: '--afui-form-select-search-option-font-size',
        type: 'text',
        initialValue: '1em',
      },
      {
        variable: '--afui-form-select-search-option-hover-background-color',
        type: 'color',
        initialValue: '#333333',
      },
      {
        variable: '--afui-form-select-search-option-active-background-color',
        type: 'color',
        initialValue: '#131212',
      },
      {
        variable: '--afui-form-select-search-option-hover-text-color',
        type: 'color',
        initialValue: 'white',
      },
      {
        variable: '--afui-form-select-search-option-right-left-padding',
        type: 'text',
        initialValue: '0.4em',
      },
      {
        variable: '--afui-form-select-search-drop-down-icon-width',
        type: 'text',
        initialValue: '1em',
      },
      {
        variable: '--afui-form-select-search-drop-down-icon-height',
        type: 'text',
        initialValue: '1em',
      },
      {
        variable: '--afui-form-select-search-drop-down-icon-color',
        type: 'color',
        initialValue: '#757575',
      },
      {
        variable: '--afui-form-select-search-drop-down-icon-right-left-padding',
        type: 'text',
        initialValue: '0.3em',
      },
      {
        variable: '--afui-form-select-search-drop-down-icon-top-bottom-padding',
        type: 'text',
        initialValue: '0.2em',
      },
      {
        variable: '--afui-form-select-search-child-option-padding-right',
        type: 'text',
        initialValue: '1em',
      },
      {
        variable: '--afui-form-select-search-child-option-arrow-size',
        type: 'text',
        initialValue: '0.7em',
      },
      {
        variable: '--afui-form-select-search-drop-down-icon-left',
        type: 'text',
        initialValue: '1.6em',
      },
    ],
  },
};
