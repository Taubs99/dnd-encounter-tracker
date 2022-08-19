import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PartiesComponent } from './parties/parties.component';
import { EncountersComponent } from './encounters/encounters.component';
import { TrackerComponent } from './tracker/tracker.component';
import { HomeComponent } from './home/home.component';
import { MonsterManualComponent } from './encounters/monster-manual/monster-manual/monster-manual.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PartiesComponent,
    EncountersComponent,
    TrackerComponent,
    HomeComponent,
    MonsterManualComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
