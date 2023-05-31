import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AfuiIconModule } from '../shared/afui-icon/afui-icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { AfuiStructuresComponent } from './afui-structures.component';

export default {
  title: 'Example/Structures',
  component: AfuiStructuresComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [AfuiStructuresComponent],
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
  `afui-structures {  width: 70px; height:68px; display: flex } `,
];

const defaultTemplate = `<afui-structures></afui-structures>`;

export const Default = () => ({
  component: AfuiStructuresComponent,
  template: defaultTemplate,
  styles: defaultStyle,
  // props: {
  //   svgIconName: 'reserve_instructions',
  //   label: 'שריונים',
  //   isActive: false,
  //   withCloseIcon: false,
  // },
});
