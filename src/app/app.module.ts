import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { IconModule } from './shared/icon.module';
import { DemoMaterialModule } from './shared/material.module';
import { TabComponent } from './tab-component/tab.component';
import { TabsMockComponent } from './tabs/tabs-mock.component';
import { TabsComponent } from './tabs/tabs.component';
import { DragScrollComponent } from './drag-scroll/drag-scroll.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, TabsComponent, TabComponent, TabsMockComponent, DragScrollComponent],
  imports: [
    IconModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    DemoMaterialModule,
    HttpClientModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
