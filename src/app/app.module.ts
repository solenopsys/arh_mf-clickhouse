import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {TABLE_PAGE} from "@solenopsys/uimatrix-templates";
import {FormsModule} from "@angular/forms";
import {TABLES} from "./tables.config";


const routes: Routes = [
  TABLE_PAGE(':table'),
];

export const PROVIDERS_CONF = [
  {provide: 'tables', useValue: TABLES},
  {provide: 'assets_dir', useValue: "/fm/modules/richteri/postgres"},
  {provide: 'mod_name', useValue: "git"}
]

export const IMPORTS_CONF = [
  BrowserModule,
  RouterModule.forChild(routes),
  FormsModule,
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...IMPORTS_CONF
  ],
  providers: [...PROVIDERS_CONF],
  bootstrap: [AppComponent],
})
export class AppModule {}
