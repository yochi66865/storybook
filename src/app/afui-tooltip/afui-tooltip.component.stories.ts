import { withKnobs, select, number, boolean, button } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { AfUiTooltipModule } from './afui-tooltip.module';
import { Component, ViewChild, TemplateRef, Input, OnInit } from '@angular/core';
import { AfUiTooltipDirective, TooltipTrigger } from './afui-tooltip.directive';

export default {
  title: 'Tooltip',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AfUiTooltipModule]
    })
  ],
};

@Component({
  selector: 'AfUiTooltipExample',
  styles: [`
    .tooltip-element { color: #fff; border: 1px solid #ccc; padding: 10px 50px; cursor: default; border-radius: 6px; text-align: center; }
    .header { font-weight: bold; text-shadow: rgba(0, 0, 0, .7) 1px 2px 2px; }
    .custom { cursor: pointer; color: red; transition: all .4s ease; }
    .custom:hover { color: blue; }
    table { width: 100%; background-color: #d4d4d4; border-radius: 5px; margin-top: 5px; }
    .toggle-buttons { display: flex; justify-content: space-between; align-items: center; width: 190px; padding: 10px; }
    .button { cursor: pointer; padding: 5px 10px; background-color: #4779d4; color: #ffffff; font-size: 12px; border-radius: 4px; transition: background-color .2s ease-in-out; }
    .button:hover { background-color: #73a0f1; }
  `],
  template: `
    <div class="tooltip-element"
      [afuiTooltip]="tooltipContent"
      [afuiTooltipShowArrow]="showArrow"
      [afuiTooltipStartVisible]="startVisible"
      [afuiTooltipHideDelay]="hideDelay"
      [afuiTooltipShowDelay]="showDelay"
      [afuiTooltipPosition]="position"
      [afuiTooltipTrigger]="trigger"
      [afuiTooltipHeader]="header"
      class="with-header"
      #tooltip="afuiTooltip">Text</div>
    <div class="toggle-buttons" *ngIf="trigger === 'manual'">
      <div class="button" (click)="show()">Show tooltip</div>
      <div class="button" (click)="hide()">Hide tooltip</div>
    </div>
    <ng-template #tmpl>
      <div class="header">Tooltip with <span class="color">template</span></div>
      <div><button type="button">Button</button>, <span class="custom">custom</span> behaviors</div>
      <div><table><tr><th>Or</th><th>Maybe</th></tr><tr><td>even</td><td>a</td></tr><tr><td>whole</td><td>table</td></tr></table></div>
    </ng-template>
  `
})
class AfUiTooltipExample implements OnInit {
  @Input() position: string = 'bottom';
  @Input() contentType: 'simple' | 'template' = 'simple';
  @Input() showDelay: number = 0;
  @Input() hideDelay: number = 0;
  @Input() trigger: TooltipTrigger = 'hover';
  @Input() header: string;

  @ViewChild('tooltip', { static: true }) tooltipElement: AfUiTooltipDirective;
  @ViewChild('tmpl', { static: true }) tmpl: TemplateRef<any>;

  tooltipContent: string | TemplateRef<any> = 'This is tooltip!';
  startVisible: boolean = true;

  ngOnInit() {
    if (this.showDelay || this.hideDelay) {
      this.startVisible = false;
    }

    if (this.contentType === 'template') {
      this.tooltipContent = this.tmpl;
    }
  }

  show() {
    this.tooltipElement.showTooltip();
  }

  hide() {
    this.tooltipElement.hideTooltip();
  }
}

const getProps = (contentType, header?) => {
  return {
    header: header,
    contentType: contentType,
    position: select('Tooltip position', ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right', 'left', 'right', 'auto'], 'left'),
    showDelay: number('Show delay', 0),
    hideDelay: number('Hide delay', 0),
    showArrow: boolean('Show arrow', true),
    trigger: select('Trigger', ['hover', 'click', 'manual'], 'hover')
  };
};

export const Default = () => ({
  component: AfUiTooltipExample,
  props: getProps('simple')
});

export const WithTemplate = () => ({
  component: AfUiTooltipExample,
  props: getProps('template')
});

export const WithHeader = () => ({
  component: AfUiTooltipExample,
  props: getProps('simple',"text text")
});