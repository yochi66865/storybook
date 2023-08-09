import {
  Component,
  Input,
  OnInit,
  OnChanges,
  ViewEncapsulation,
  forwardRef,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { AfuiRoundingTimes } from '@models/afui-rounding-times.model';
import { TypeSeparationOfTimes } from '@models/afui-type-separation-of-times';
import { ControlValueService } from '@shared/control-value-service/control-value.service';
import { MatSelectChange } from '@angular/material/select';
import { initialRoundingTimes } from '../util';

@Component({
  selector: 'rounding-times',
  templateUrl: './afui-rounding-times.component.html',
  styleUrls: ['./afui-rounding-times.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, 4),
    },
  ],
})
export class AfuiRoundingTimesComponent implements OnInit {
  @Input() afuiRoundingTimes: AfuiRoundingTimes = { ...initialRoundingTimes };
  parentForm!: FormGroup;
  typeSeparationOfTimesInput!: AbstractControl;
  timeToRoundingInput!: AbstractControl;
  messageTimeToRounding: Record<number, string> = {
    0: 'XX:00, XX:10, XX:20, XX:30...',
    5: 'XX:05, XX:15, XX:25, XX:35...',
  };
  messageTypeSeparationOfTimes: Record<TypeSeparationOfTimes, string> = {
    אזורית:
      'עיגול זמ"מ במוד אזורי, ייתכנו זמ"מים זהים עבור המלצות מאזורים אחרים',
    מרחבית: 'הפרדה של 10 דקות בין זמ"מ לזמ"מ',
  };

  constructor(
    private parent: ControlContainer,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildFormGroup();
  }

  buildFormGroup() {
    this.parentForm = this.parent.control as FormGroup;
    this.timeToRoundingInput = this.formBuilder.control(
      this.afuiRoundingTimes.timeToRounding
    );
    this.typeSeparationOfTimesInput = this.formBuilder.control(
      this.afuiRoundingTimes.typeSeparationOfTimes
    );
    this.parentForm.addControl(
      'roundingTimes',
      this.formBuilder.group({
        typeSeparationOfTimes: this.typeSeparationOfTimesInput,
        timeToRounding: this.timeToRoundingInput,
      })
    );
  }
}
