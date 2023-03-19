import { MatSelectModule } from '@angular/material/select';
import { array, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { AfUiFormsModule } from '../afui-forms.module';

export default {
  title: 'Forms/Form Select',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AfUiFormsModule, MatSelectModule],
    }),
  ],
};

const template = `
  <mat-form-field afui-select-form-field>
    <mat-select
      afui-select
      panelClass="afui-select-panel"
      disableOptionCentering
      disableRipple
      [placeholder]="placeholder">
      <mat-option *ngFor="let option of options" [value]="option">{{ option }}</mat-option>
    </mat-select>
  </mat-form-field>
`;

export const Default = () => ({
  template,
  props: {
    options: array(
      'Options',
      Array(5)
        .fill('')
        .map((_, i) => `אופציה ${i + 1}`)
    ),
    placeholder: text('Placeholder', 'בחר אפשרות'),
  },
});

export const Parlament = () => ({
  styles: [
    `
      mat-form-field {
        --afui-select-background-color: #1d2026;
        --afui-select-chevron-color: #808082;
        --afui-select-placeholder-color: #fff;
        --afui-select-placeholder-font-size: 12px;
        --afui-select-selected-value-color: #fff;
      }

      .mat-option.parlament {
        color: #fff;
        font-size: 12px;
        background-color: #1d2026;
        height: 20px;
        text-align: right;
      }

      .mat-option.parlament:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 1px;
        background-color: #000;
      }

      .mat-option.parlament.mat-selected {
        color: #fff;
        background-color: #1d2026;
      }

      .mat-option.parlament:hover {
        background-color: #40a0ff;
      }
    `
  ],
  template: `
    <mat-form-field afui-select-form-field>
      <mat-select
        afui-select
        panelClass="afui-select-panel"
        disableOptionCentering
        disableRipple
        [placeholder]="placeholder">
        <mat-option *ngFor="let option of options" class="parlament" [value]="option">{{ option }}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  props: {
    placeholder: 'בחר אפשרות',
    options: ['a', 'b', 'c']
  }
})

export const Customized = () => ({
  template,
  props: {
    options: array(
      'Options',
      Array(5)
        .fill('')
        .map((_, i) => `אופציה ${i + 1}`)
    ),
    placeholder: text('Placeholder', 'בחר אפשרות'),
  },
});

Customized.story = {
  parameters: {
    cssVariablesKnobs: [
      { variable: '--afui-select-padding', type: 'text', initialValue: '8px' },
      { variable: '--afui-select-border-radius', type: 'text', initialValue: '10px' },
      { variable: '--afui-select-background-color', type: 'color', initialValue: '#fff' },
      { variable: '--afui-select-chevron-color', type: 'color', initialValue: 'rgba(0, 0, 0, 0.4)' },
      { variable: '--afui-select-placeholder-color', type: 'color', initialValue: 'rgba(0, 0, 0, 0.4)' },
      { variable: '--afui-select-panel-top', type: 'text', initialValue: '30px' },
    ],
  },
};
