import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  inject
} from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AfuiStructuresInstructions } from '@models/afui-structures.model';
import { initialStructuresInstructions } from './util';

@Component({
  selector: 'afui-structures',
  templateUrl: './afui-structures.component.html',
  styleUrls: ['./afui-structures.component.less'],
  encapsulation: ViewEncapsulation.None,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, 4),
    },
  ],
})
export class AfuiStructuresComponent implements OnInit {
  @Input() structuresInstructions: AfuiStructuresInstructions = {
    ...initialStructuresInstructions,
  };
  parentForm!: FormGroup;
  numSquadronInStructures: string[] = ['2', '4', 'לבחירת האלגוריתם'];
  isCheckedRoundingTimes: boolean = false;
  messageRoundingTimes: string =
    'לא ניתן להגדיר הפרדת זמנים במצב של עיגול זמ"מ';

  constructor(
    private parent: ControlContainer,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildFormGroup();
  }

  toggleRound({ checked }: MatSlideToggleChange) {
    this.isCheckedRoundingTimes = checked;
  }

  buildFormGroup() {
    this.parentForm = this.parent.control as FormGroup;
    this.parentForm.addControl(
      'structures',
      this.formBuilder.group({
        amountOfAircraftInTheStructure: this.formBuilder.control(
          this.structuresInstructions.amountOfAircraftInTheStructure
        ),
      })
    );
  }

  onSubmit() {
    console.log('parentForm', this.parent.value);
  }
}
