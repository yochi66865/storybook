import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { AfuiRoundingTimes } from '../models/afui-rounding-times.model';

@Component({
  selector: 'rounding-times',
  templateUrl: './afui-rounding-times.component.html',
  styleUrls: ['./afui-rounding-times.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class AfuiRoundingTimesComponent implements OnInit, OnChanges {
  @Input() afuiRoundingTimes!: AfuiRoundingTimes;
  cloneAfuiRoundingTimes: AfuiRoundingTimes = {
    timeToRounding: null!,
    typeSeparationOfTimes: null!,
  };

  constructor() {}

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
}
