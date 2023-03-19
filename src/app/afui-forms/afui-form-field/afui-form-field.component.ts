import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AfUiInputDirective } from '../afui-input/afui-input.directive';

@Component({
  selector: 'afui-form-field',
  templateUrl: './afui-form-field.component.html',
  styleUrls: ['./afui-form-field.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AfUiFormFieldComponent implements AfterContentInit, OnDestroy {
  private _destroyed = new Subject<void>();

  @ContentChild(AfUiInputDirective, { static: true }) _controlStatic: AfUiInputDirective;
  @ContentChild(AfUiInputDirective) _controlNonStatic: AfUiInputDirective;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
  }

  get _control() {
    return this._controlNonStatic || this._controlStatic;
  }

  ngAfterContentInit(): void {
    if (this._control.ngControl && this._control.ngControl.valueChanges) {
      this._control.ngControl.valueChanges
        .pipe(takeUntil(this._destroyed))
        .subscribe(() => this._changeDetectorRef.markForCheck());
    }

  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
