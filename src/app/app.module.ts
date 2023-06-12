import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './shared/material.module';
import { TabComponent } from './tab/tab.component';
import { TabsMockComponent } from './tabs/tabs-mock.component';
import { TabsComponent } from './tabs/tabs.component';
import { AfuiIconModule } from './shared/afui-icon/afui-icon.module';
import { AfUiFormsModule } from './afui-forms/afui-forms.module';
import { AfuiStructuresModule } from './afui-structures/afui-structures.module';

@NgModule({
  declarations: [AppComponent, TabsComponent, TabComponent, TabsMockComponent],
  imports: [
    AfUiFormsModule,
    AfuiIconModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    DemoMaterialModule,
    HttpClientModule,
    DragScrollModule,
    AfuiStructuresModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
