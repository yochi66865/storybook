import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, DemoMaterialModule, HttpClientModule],
})
export class IconModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `add`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/add.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `advanced_instructions`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/advanced-instructions.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `areas`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/areas.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `assignments`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/assignments.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `close`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/close.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `remarks`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/remarks.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `reserve`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/reserve.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `sdk_assignment`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/sdk-assignment.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `robot`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/robot.svg'
      )
    );
  }
}
