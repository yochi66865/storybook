import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[afui-label-error]' })
export class AfuiLabelErrorDirective {
  constructor(private renderer: Renderer2,
              private hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'afui-label-error');
  }
}
