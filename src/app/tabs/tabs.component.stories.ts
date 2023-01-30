import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconModule } from '../shared/icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { TabComponent } from '../tab-component/tab.component';
import { TabsComponent } from './tabs.component';

export default {
  title: 'Example/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabsComponent, TabComponent],
      imports: [
        BrowserAnimationsModule,
        DemoMaterialModule,
        HttpClientModule,
        IconModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<TabsComponent> = (args: TabsComponent) => ({
  // props: args,
});

export const Default = Template.bind({});
