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
import { initialStructuresInstructions } from './util';

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
  cloneStructuresInstructions: AfuiStructuresInstructions = {
    ...initialStructuresInstructions,
  };
  isCheckedRoundingTimes: boolean = false;
  messageRoundingTimes: string =
    'לא ניתן להגדיר הפרדת זמנים במצב של עיגול זמ"מ';
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.cloneStructuresInstructions =
      this.cloneDeepStructuresInstructionsInput();
  }

  toggleRound({ checked }: MatSlideToggleChange) {
    this.isCheckedRoundingTimes = checked;
  }

  cloneDeepStructuresInstructionsInput() {
    return {
      separationOfTimes:
        this.structuresInstructions?.separationOfTimes ??
        this.cloneStructuresInstructions.separationOfTimes,
      roundingTimes:
        this.structuresInstructions?.roundingTimes ??
        this.cloneStructuresInstructions.roundingTimes,
      amountOfAircraftInTheStructure:
        this.structuresInstructions?.amountOfAircraftInTheStructure ??
        this.cloneStructuresInstructions.amountOfAircraftInTheStructure,
    };
  }
}
