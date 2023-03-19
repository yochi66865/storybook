import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, ElementRef, Input, Optional, Renderer2, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[afui-input]',
  host: {
    '[attr.aria-required]': 'required'
  }
})
export class AfUiInputDirective {

  @Input()
  get required(): boolean {
    return this._required;
  }

  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }

  protected _required = false;

  constructor(private renderer: Renderer2,
              private hostElement: ElementRef,
              @Optional() @Self() public ngControl: NgControl) {
    renderer.addClass(hostElement.nativeElement, 'afui-input');
  }

  get hasError() {
    return !!(this.ngControl && this.ngControl.invalid && (this.ngControl.dirty));
  }
}
