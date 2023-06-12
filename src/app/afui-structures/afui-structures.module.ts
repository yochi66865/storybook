import { NgModule } from '@angular/core';
import { AfUiFormsModule } from '../afui-forms/afui-forms.module';
import { FormsModule } from '@angular/forms';
import { AfuiIconModule } from '../shared/afui-icon/afui-icon.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AfuiStructuresComponent } from './afui-structures.component';
import { AfuiSeparationOfTimesComponent } from './afui-separation-of-times/afui-separation-of-times.component';
import { AfuiRoundingTimesComponent } from './afui-rounding-times/afui-rounding-times.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AfuiStructuresComponent,
    AfuiSeparationOfTimesComponent,
    AfuiRoundingTimesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    AfUiFormsModule,
    AfuiIconModule,
    MatSelectModule,
  ],
  providers: [],
})
export class AfuiStructuresModule {}
