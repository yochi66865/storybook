import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[afui-error]'
})
export class AfuiErrorDirective {

  constructor(private renderer: Renderer2,
              private hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'afui-error');
  }
}
