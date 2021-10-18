import { ListBoxAllModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { ChipListModule } from '@syncfusion/ej2-angular-buttons';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ ListBoxAllModule,ChipListModule, DropDownListModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
