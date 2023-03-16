import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconModule } from '../shared/icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { InstructionsTabComponent } from '../tab-component/instructions-tab.component';
import { TabsMockComponent } from './tabs-mock.component';
import { TabsComponent } from './tabs.component';

export default {
  title: 'Example/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TabsComponent,
        InstructionsTabComponent,
        TabsMockComponent,
      ],
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
  template: `
  <app-tabs-mock></app-tabs-mock>
`,
});

export const Default = Template.bind({});
