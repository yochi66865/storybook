import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Tab } from '../models/tab.interface';
import { templateBinding } from './template-binding';

@Component({
  selector: 'app-tabs-mock',
  styles: [
    `
      app-tabs {
        height: 422px;
        width: 475px;
      }
    `,
  ],
  template: ` <app-tabs *ngIf="initialTabs" [tabs]="tabs"></app-tabs>

    <ng-template #content0>{{ templateBinding(0) }}</ng-template>
    <ng-template #content1>{{ templateBinding(1) }}</ng-template>
    <ng-template #content2>{{ templateBinding(2) }}</ng-template>
    <ng-template #content3>{{ templateBinding(3) }}</ng-template>
    <ng-template #content4>{{ templateBinding(4) }}</ng-template>
    <ng-template #content5>{{ templateBinding(5) }}</ng-template>`,
})
export class TabsMockComponent {
  initialTabs: boolean = false;
  templateBinding = templateBinding;
  @ViewChild('content0') content0!: TemplateRef<any>;
  @ViewChild('content1') content1!: TemplateRef<any>;
  @ViewChild('content2') content2!: TemplateRef<any>;
  @ViewChild('content3') content3!: TemplateRef<any>;
  @ViewChild('content4') content4!: TemplateRef<any>;
  @ViewChild('content5') content5!: TemplateRef<any>;
  tabs!: Tab[];
  ngAfterViewInit(): void {
    this.tabs = [
      {
        svgIconName: 'sdk_assignment',
        label: 'הקצאות סדכ',
        template: this.content0,
      },
      {
        svgIconName: 'reserve_instructions',
        label: 'שריונים',
        template: this.content1,
      },
      {
        svgIconName: 'areas_instructions',
        label: 'אזורים ומבנים',
        template: this.content2,
      },
      {
        svgIconName: 'assignments_instructions',
        label: 'הקצאות',
        template: this.content3,
      },
      {
        svgIconName: 'remarks_instructions',
        label: 'הערות',
        template: this.content4,
      },
      {
        svgIconName: 'advanced_instructions',
        label: 'הנחיות מתקדמות',
        template: this.content5,
      },
    ];
    this.initialTabs = true;
  }

  constructor() {}
}
