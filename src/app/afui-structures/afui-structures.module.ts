import { NgModule } from '@angular/core';
import { AfUiFormsModule } from '../afui-forms/afui-forms.module';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AfuiIconModule } from '@shared/afui-icon/afui-icon.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AfuiStructuresComponent } from './afui-structures.component';
import { AfuiSeparationOfTimesComponent } from './afui-separation-of-times/afui-separation-of-times.component';
import { AfuiRoundingTimesComponent } from './afui-rounding-times/afui-rounding-times.component';
import { MatSelectModule } from '@angular/material/select';
import { AfUiTooltipModule } from '../afui-tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AfuiStructuresComponent,
    AfuiSeparationOfTimesComponent,
    AfuiRoundingTimesComponent,
  ],
  exports: [
    AfuiStructuresComponent,
    AfuiSeparationOfTimesComponent,
    AfuiRoundingTimesComponent,
    ReactiveFormsModule,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AfUiFormsModule,
    AfuiIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    AfUiTooltipModule,
    CommonModule,
  ],
  providers: [FormGroupDirective],
})
export class AfuiStructuresModule {}
