import { TemplateRef } from '@angular/core';

export interface Tab {
  svgIconName: string;
  label: string;
  template?: TemplateRef<HTMLElement>;
}
