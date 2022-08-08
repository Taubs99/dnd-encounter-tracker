import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { HealthCounterComponent } from './health-counter/health-counter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  declarations: [AppComponent, HealthCounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
