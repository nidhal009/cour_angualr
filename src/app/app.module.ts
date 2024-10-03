import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Standalone component
import { FormsModule } from '@angular/forms';
import { Directive } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    FormsModule, 
    Directive,
    CommonModule
  ],
})
export class AppModule {}
