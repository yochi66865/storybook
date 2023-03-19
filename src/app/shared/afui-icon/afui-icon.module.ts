import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as icons from './icons';

@NgModule({
  imports: [MatIconModule],
  exports: [MatIconModule],
})
export class AfuiIconModule {
  constructor(registry: MatIconRegistry, sanitizer: DomSanitizer) {
    Object.values(icons).forEach(({ name, data }) =>
      registry.addSvgIconLiteral(name, sanitizer.bypassSecurityTrustHtml(data))
    );
  }
}
