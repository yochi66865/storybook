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
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { initialStructuresInstructions } from './util';

@Component({
  selector: 'afui-structures',
  templateUrl: './afui-structures.component.html',
  styleUrls: ['./afui-structures.component.less'],
  encapsulation: ViewEncapsulation.None,
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
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
    private parent: FormGroupDirective,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildFormGroup();
  }

  toggleRound({ checked }: MatSlideToggleChange) {
    this.isCheckedRoundingTimes = checked;
  }

  buildFormGroup() {
    this.parentForm = this.parent.form;
    console.log('tttttttttttt', this.parent);

    this.parentForm.addControl(
      'structures',
      this.formBuilder.group({
        amountOfAircraftInTheStructure: this.formBuilder.control(
          this.structuresInstructions.amountOfAircraftInTheStructure
        ),
      })
    );
  }
}
