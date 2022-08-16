import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'encounter-tracker';
  currentTab = 'home'

  changeTab(newTab: string){
    this.currentTab = newTab;
  }
}
