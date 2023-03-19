import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'mat-icon[afui-icon-suffix]',
  exportAs: `afui-icon-suffix`
})
export class AfuiIconSuffixDirective {

  constructor(private renderer: Renderer2,
              private hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'afui-icon-suffix');
  }
}
