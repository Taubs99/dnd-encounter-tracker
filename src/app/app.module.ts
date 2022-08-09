import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HealthCounterComponent } from './health-counter/health-counter.component';
import { HeroTrackerComponent } from './hero-tracker/hero-tracker.component';
import { HeroTrackerInitiativeDialogComponent } from './hero-tracker/hero-tracker-initiative-dialog/hero-tracker-initiative-dialog.component';
import { HeroTrackerHealthDialogComponent } from './hero-tracker/hero-tracker-health-dialog/hero-tracker-health-dialog.component';

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
    MatIconModule,
    DragDropModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
  ],
  declarations: [AppComponent, HealthCounterComponent, HeroTrackerComponent, HeroTrackerInitiativeDialogComponent, HeroTrackerHealthDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
