import { KeyValue } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { AfuiSeparationOfTimes } from '@models/afui-separation-of-times.model';
import { initialSeparationOfTimes } from '../util';

@Component({
  selector: 'separation-of-times',
  templateUrl: './afui-separation-of-times.component.html',
  styleUrls: ['./afui-separation-of-times.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, 4),
    },
  ],
})
export class AfuiSeparationOfTimesComponent implements OnInit {
  @Input() separationOfTimes: AfuiSeparationOfTimes = {
    ...initialSeparationOfTimes,
  };

  parentForm!: FormGroup;
  amountOfBuildingsAtTheSameTimeInput!: AbstractControl;
  timesSeparationOfTimes: Record<number, string> = {
    5: '5 דקות',
    10: '10 דקות',
    15: '15 דקות',
    20: '20 דקות',
    25: '25 דקות',
  };
  showAmountOfBuildingsAtTheSameTime: boolean = false;

  constructor(
    private parent: ControlContainer,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildFormGroup();
  }

  keyDescOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return +a.key > +b.key ? 1 : +b.key > +a.key ? -1 : 0;
  };

  selectTypeSeparationOfTimes({ value }: MatSelectChange) {
    if (value === 'מרחבית') {
      this.amountOfBuildingsAtTheSameTimeInput.setValue(null);
      this.showAmountOfBuildingsAtTheSameTime = false;
    } else {
      this.showAmountOfBuildingsAtTheSameTime = true;
    }
  }

  buildFormGroup() {
    this.amountOfBuildingsAtTheSameTimeInput = this.formBuilder.control(
      this.separationOfTimes.amountOfBuildingsAtTheSameTime
    );
    this.parentForm = this.parent.control as FormGroup;
    this.parentForm.addControl(
      'separationOfTimes',
      this.formBuilder.group({
        typeSeparationOfTimes: this.formBuilder.control(
          this.separationOfTimes.typeSeparationOfTimes
        ),
        separationWindowTime: this.formBuilder.control(
          this.separationOfTimes.separationWindowTime
        ),
        amountOfBuildingsAtTheSameTime:
          this.amountOfBuildingsAtTheSameTimeInput,
      })
    );
  }
}
