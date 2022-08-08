import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HealthCounterComponent } from './health-counter/health-counter.component';
import { HeroTrackerComponent } from './hero-tracker/hero-tracker.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
  ],
  declarations: [AppComponent, HealthCounterComponent, HeroTrackerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
