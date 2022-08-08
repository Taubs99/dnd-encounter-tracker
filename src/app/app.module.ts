import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HealthCounterComponent } from './health-counter/health-counter.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HealthCounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
