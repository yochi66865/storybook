import { HttpClientModule } from '@angular/common/http';
import { TemplateRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Tab } from '../models/tab.interface';
import { IconModule } from '../shared/icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { TabComponent } from '../tab/tab.component';
import { TabsMockComponent } from './tabs-mock.component';
import { TabsComponent } from './tabs.component';
import { templateBinding } from './template-binding';

export default {
  title: 'Example/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabsComponent, TabComponent, TabsMockComponent],
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
