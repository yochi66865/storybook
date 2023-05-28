import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AfuiIconModule } from '../shared/afui-icon/afui-icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { AfuiSeparationOfTimesComponent } from './afui-separation-of-times.component';

export default {
  title: 'Example/Separation Of Times',
  component: AfuiSeparationOfTimesComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [AfuiSeparationOfTimesComponent],
      imports: [
        BrowserAnimationsModule,
        DemoMaterialModule,
        HttpClientModule,
        AfuiIconModule,
      ],
    }),
  ],
} as Meta;

const defaultStyle = [
  `afui-separation-of-times {  width: 70px; height:68px; display: flex } `,
];

const defaultTemplate = `<afui-separation-of-times></afui-separation-of-times>`;

export const Default = () => ({
  component: AfuiSeparationOfTimesComponent,
  template: defaultTemplate,
  styles: defaultStyle,
  // props: {
  //   svgIconName: 'reserve_instructions',
  //   label: 'שריונים',
  //   isActive: false,
  //   withCloseIcon: false,
  // },
});
