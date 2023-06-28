import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AfuiStructuresInstructions } from '@models/afui-structures.model';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ControlValueService } from '@shared/control-value-service/control-value.service';

@Component({
  selector: 'afui-structures',
  templateUrl: './afui-structures.component.html',
  styleUrls: ['./afui-structures.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class AfuiStructuresComponent
  extends ControlValueService
  implements OnInit, OnChanges
{
  @Input() structuresInstructions!: AfuiStructuresInstructions;
  numSquadronInStructures: string[] = ['2', '4', 'לבחירת האלגוריתם'];
  cloneStructuresInstructions!: AfuiStructuresInstructions;
  isCheckedRoundingTimes: boolean = false;
  messageRoundingTimes: string =
    'לא ניתן להגדיר הפרדת זמנים במצב של עיגול זמ"מ';
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.cloneStructuresInstructions = {
      separationOfTimes: this.structuresInstructions?.separationOfTimes ?? {
        separationWindowTime: null,
        typeSeparationOfTimes: null,
      },
      roundingTimes: this.structuresInstructions?.roundingTimes ?? {
        timeToRounding: null,
        typeSeparationOfTimes: null,
      },
      amountOfAircraftInTheStructure:
        this.structuresInstructions?.amountOfAircraftInTheStructure ?? null,
    };
  }

  toggleRound({ checked }: MatSlideToggleChange) {
    this.isCheckedRoundingTimes = checked;
  }
}
