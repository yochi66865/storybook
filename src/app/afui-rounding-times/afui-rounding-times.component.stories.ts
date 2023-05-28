import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AfuiIconModule } from '../shared/afui-icon/afui-icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { AfuiRoundingTimesComponent } from './afui-rounding-times.component';

export default {
  title: 'Example/Rounding Times',
  component: AfuiRoundingTimesComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [AfuiRoundingTimesComponent],
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
  `rounding-times {  width: 70px; height:68px; display: flex } `,
];

const defaultTemplate = `<rounding-times></rounding-times>`;

export const Default = () => ({
  component: AfuiRoundingTimesComponent,
  template: defaultTemplate,
  styles: defaultStyle,
  // props: {
  //   svgIconName: 'reserve_instructions',
  //   label: 'שריונים',
  //   isActive: false,
  //   withCloseIcon: false,
  // },
});
