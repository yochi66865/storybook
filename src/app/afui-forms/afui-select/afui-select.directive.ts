import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'mat-select[afui-select]',
})
export class AfuiSelectDirective {
  constructor(private readonly renderer: Renderer2, host: ElementRef) {
    this.renderer.addClass(host.nativeElement, 'afui-select');
  }
}
