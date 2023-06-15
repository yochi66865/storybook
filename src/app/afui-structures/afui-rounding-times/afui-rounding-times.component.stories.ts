import { withKnobs } from '@storybook/addon-knobs';
import { Meta, moduleMetadata } from '@storybook/angular';
import { AfuiStructuresModule } from '../afui-structures.module';
import { AfuiRoundingTimesComponent } from './afui-rounding-times.component';

export default {
  title: 'Example/Rounding Times',
  component: AfuiRoundingTimesComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AfuiStructuresModule],
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
