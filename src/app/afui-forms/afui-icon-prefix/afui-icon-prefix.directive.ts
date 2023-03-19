import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'mat-icon[afui-icon-prefix]',
  exportAs: `afui-icon-prefix`
})
export class AfuiIconPrefixDirective {

  constructor(private renderer: Renderer2,
    private hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'afui-icon-prefix');
  }
}
