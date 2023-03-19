import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'afui-form-container',
  templateUrl: './afui-form-container.component.html',
  styleUrls: ['./afui-form-container.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AfuiFormContainerComponent {
  @Input() title!: string;
  @Input() isFormWithTitleBar: boolean = true;
  @Output() closeEmitter: EventEmitter<void>;

  constructor() {
    this.closeEmitter = new EventEmitter<void>();
  }

  close() {
    this.closeEmitter.emit();
  }
}
