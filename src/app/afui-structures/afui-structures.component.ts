import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AfuiStructuresInstructions } from '../models/afui-structures.model';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'afui-structures',
  templateUrl: './afui-structures.component.html',
  styleUrls: ['./afui-structures.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class AfuiStructuresComponent implements OnInit, OnChanges {
  @Input() structuresInstructions!: AfuiStructuresInstructions;
  numSquadronInStructures: string[] = ['2', '4', 'לבחירת האלגוריתם'];
  cloneStructuresInstructions!: AfuiStructuresInstructions;
  isCheckedRoundingTimes: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.structuresInstructions && this.structuresInstructions)
      this.cloneStructuresInstructions = this.structuresInstructions;
  }

  toggleRound({ checked }: MatSlideToggleChange) {
    console.log();

    this.isCheckedRoundingTimes = checked;
    // if (checked) {
    //   this.structuresInstructions.separationOfTimes = null;
    // } else {
    //   this.cloneStructuresInstructions.roundingTimes = null;
    // }
  }
}
