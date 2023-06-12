import { Injectable } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ControlValueService implements ControlValueAccessor {
  constructor() {}
  onChange: any = () => {};
  onTouch: any = () => {};
  val: any = ''; // this is the updated value that the class accesses
  set value(val: any) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value;
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
