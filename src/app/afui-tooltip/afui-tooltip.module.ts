import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AfUiTooltipComponent } from './afui-tooltip.component';
import { AfUiTooltipDirective, TooltipPosition } from './afui-tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [AfUiTooltipDirective, AfUiTooltipComponent],
  exports: [AfUiTooltipDirective, AfUiTooltipComponent],
  entryComponents: [AfUiTooltipComponent]
})
export class AfUiTooltipModule { }
