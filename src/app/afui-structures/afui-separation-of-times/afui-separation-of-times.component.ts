import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { AfuiSeparationOfTimes } from '../../models/afui-separation-of-times.model';
import { KeyValue } from '@angular/common';
import { TypeSeparationOfTimes } from '../../models/afui-type-separation-of-times';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'separation-of-times',
  templateUrl: './afui-separation-of-times.component.html',
  styleUrls: ['./afui-separation-of-times.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AfuiSeparationOfTimesComponent implements OnInit, OnChanges {
  @Input() separationOfTimes!: AfuiSeparationOfTimes;
  cloneSeparationOfTimes: AfuiSeparationOfTimes = {
    typeSeparationOfTimes: null!,
    separationWindowTime: null!,
    amountOfBuildingsAtTheSameTime: null!,
  };
  timesSeparationOfTimes: Record<number, string> = {
    5: '5 דקות',
    10: '10 דקות',
    15: '15 דקות',
    20: '20 דקות',
    25: '25 דקות',
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.separationOfTimes) {
      this.cloneSeparationOfTimes = {
        typeSeparationOfTimes:
          this.separationOfTimes?.typeSeparationOfTimes ?? null,
        separationWindowTime:
          this.separationOfTimes?.separationWindowTime ?? null,
        amountOfBuildingsAtTheSameTime:
          this.separationOfTimes?.amountOfBuildingsAtTheSameTime ?? 0,
      };
    }
  }

  ngOnInit(): void {}

  keyDescOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return +a.key > +b.key ? 1 : +b.key > +a.key ? -1 : 0;
  };

  selectTypeSeparationOfTimes({ value }: MatSelectChange) {
    this.cloneSeparationOfTimes.typeSeparationOfTimes = value;
    if (value === 'מרחבית') {
      this.cloneSeparationOfTimes.amountOfBuildingsAtTheSameTime = null;
    }
  }
}
