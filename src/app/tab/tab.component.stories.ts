import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconModule } from '../shared/icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { cssVariablesKnobs } from './css-variables-knob';
import { TabComponent } from './tab.component';

export default {
  title: 'Example/Tab',
  component: TabComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [TabComponent],
      imports: [
        BrowserAnimationsModule,
        DemoMaterialModule,
        HttpClientModule,
        IconModule,
      ],
    }),
  ],
} as Meta;

const defaultStyle = [`afui-tab {  width: 70px; height:68px; display: flex } `];

const defaultTemplate = `<afui-tab [svgIconName]="svgIconName" [label]="label" 
  [isActive]="isActive"></afui-tab>`;

export const Default = () => ({
  component: TabComponent,
  template: defaultTemplate,
  styles: defaultStyle,
  props: {
    svgIconName: 'reserve',
    label: 'שריונים',
    isActive: false,
  },
});

export const ActiveTag = () => ({
  component: TabComponent,
  template: defaultTemplate,
  styles: defaultStyle,
  props: {
    svgIconName: 'reserve',
    label: 'שריונים',
    isActive: true,
  },
});

const useCssVaiablesStyle = [
  `afui-tab {  width: 111px; height:27px; display: flex } `,
];

export const alternative = () => ({
  component: TabComponent,
  template: defaultTemplate,
  styles: useCssVaiablesStyle,
  props: {
    label: "'ח. זרועית ב",
    isActive: false,
  },
});

alternative.story = {
  parameters: {
    cssVariablesKnobs: [...cssVariablesKnobs],
  },
};

export const alternativeActive = () => ({
  component: TabComponent,
  template: defaultTemplate,
  styles: useCssVaiablesStyle,
  props: {
    svgIconName: 'robot',
    label: "'ח. זרועית ב",
    isActive: true,
  },
});

alternativeActive.story = {
  parameters: {
    cssVariablesKnobs: [...cssVariablesKnobs],
  },
};
