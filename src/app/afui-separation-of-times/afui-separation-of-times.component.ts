import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import {
  AfuiSeparationOfTimes,
  TypeSeparationOfTimes,
} from '../models/afui-separation-of-times.model';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'afui-separation-of-times',
  templateUrl: './afui-separation-of-times.component.html',
  styleUrls: ['./afui-separation-of-times.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AfuiSeparationOfTimesComponent implements OnInit, OnChanges {
  @Input() separationOfTimes!: AfuiSeparationOfTimes;
  cloneSeparationOfTimes!: AfuiSeparationOfTimes;
  numSquadronInStructures: string[] = ['2', '4', 'לבחירת האלגוריתם'];
  timesSeparationOfTimes: Record<number, string> = {
    5: '5 דקות',
    10: '10 דקות',
    15: '15 דקות',
    20: '20 דקות',
    25: '25 דקות',
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.separationOfTimes && this.separationOfTimes)
      this.cloneSeparationOfTimes = {
        ...this.separationOfTimes,
        amountOfBuildingsAtTheSameTime:
          this.separationOfTimes.amountOfBuildingsAtTheSameTime ?? 0,
      };
  }

  ngOnInit(): void {}

  keyDescOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return +a.key > +b.key ? 1 : +b.key > +a.key ? -1 : 0;
  };
}
