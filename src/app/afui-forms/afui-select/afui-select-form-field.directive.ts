import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Directive({
  selector: 'mat-form-field[afui-select-form-field]',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard',
      },
    },
  ],
})
export class AfuiSelectFormFieldDirective {
  constructor(private readonly renderer: Renderer2, host: ElementRef) {
    this.renderer.addClass(host.nativeElement, 'afui-select-form-field');
  }
}
