import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconModule } from '../shared/icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { InstructionsTabComponent } from './instructions-tab.component';

export default {
  title: 'Example/InstructionsTabComponent',
  component: InstructionsTabComponent,
  decorators: [
    moduleMetadata({
      declarations: [InstructionsTabComponent],
      imports: [
        BrowserAnimationsModule,
        DemoMaterialModule,
        HttpClientModule,
        IconModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<InstructionsTabComponent> = (
  args: InstructionsTabComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  svgIconName: 'reserve',
  label: 'שריונים',
  isActive: false,
};

export const ActiveTag = Template.bind({});
ActiveTag.args = {
  svgIconName: 'reserve',
  label: 'שריונים',
  isActive: true,
};
