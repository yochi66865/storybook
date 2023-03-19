import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[afui-field-label]',
  exportAs: 'afui-field-label'
})
export class AfUiFieldLabelDirective {
  constructor(private renderer: Renderer2,
              private hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'afui-field-label');
  }
}
