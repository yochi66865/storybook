import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  forwardRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AfuiRoundingTimes } from '../../models/afui-rounding-times.model';
import { TypeSeparationOfTimes } from '../../models/afui-type-separation-of-times';
import { ControlValueService } from '../../shared/control-value-service/control-value.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'rounding-times',
  templateUrl: './afui-rounding-times.component.html',
  styleUrls: ['./afui-rounding-times.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AfuiRoundingTimesComponent),
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AfuiRoundingTimesComponent
  extends ControlValueService
  implements OnInit, OnChanges
{
  @Input() afuiRoundingTimes!: AfuiRoundingTimes;
  cloneAfuiRoundingTimes: AfuiRoundingTimes = {
    timeToRounding: null!,
    typeSeparationOfTimes: null!,
  };

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.afuiRoundingTimes) {
      this.cloneAfuiRoundingTimes = {
        timeToRounding: this.afuiRoundingTimes.timeToRounding ?? null,
        typeSeparationOfTimes:
          this.afuiRoundingTimes.typeSeparationOfTimes ?? null,
      };
    }
  }

  changeTimeToRounding(timeToRounding: number) {
    this.cloneAfuiRoundingTimes.timeToRounding = timeToRounding as 5 | 10;
    this.writeValue(this.cloneAfuiRoundingTimes);
  }

  selectTypeRoundingTimes({ value }: MatSelectChange) {
    this.cloneAfuiRoundingTimes.typeSeparationOfTimes =
      value as TypeSeparationOfTimes;
    this.writeValue(this.cloneAfuiRoundingTimes);
  }
}
