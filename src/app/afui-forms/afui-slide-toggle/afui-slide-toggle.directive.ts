import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: 'mat-slide-toggle[afui-slide-toggle]',
})
export class AfuiSlideToggleDirective {
  constructor(private readonly renderer: Renderer2, private readonly host: ElementRef) {
    this.renderer.addClass(this.host.nativeElement, 'afui-slide-toggle');
  }
}
