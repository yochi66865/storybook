import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AfuiIconModule } from '../shared/afui-icon/afui-icon.module';
import { DemoMaterialModule } from '../shared/material.module';
import { TabComponent } from '../tab/tab.component';
import { TabsMockComponent } from './tabs-mock.component';
import { TabsComponent } from './tabs.component';

export default {
  title: 'Example/Tabs',
  component: TabsComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [TabsComponent, TabComponent, TabsMockComponent],
      imports: [
        BrowserAnimationsModule,
        DemoMaterialModule,
        HttpClientModule,
        AfuiIconModule,
      ],
    }),
  ],
} as Meta;

const defaultTemplate = `<app-tabs-mock></app-tabs-mock>`;

export const Template = () => ({
  component: TabsComponent,
  template: defaultTemplate,
});
