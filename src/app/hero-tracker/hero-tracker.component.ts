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
}
