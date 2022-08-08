import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-hero-tracker',
  templateUrl: './hero-tracker.component.html',
  styleUrls: ['./hero-tracker.component.css'],
})
export class HeroTrackerComponent implements OnInit {
  heroes: Array<Character> = [];

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<Character[]>) {
    moveItemInArray(this.heroes, event.previousIndex, event.currentIndex);
  }
}
