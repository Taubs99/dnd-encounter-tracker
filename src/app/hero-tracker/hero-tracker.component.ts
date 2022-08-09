import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input } from '@angular/core';
import { Character, CharacterType } from '../character';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-hero-tracker',
  templateUrl: './hero-tracker.component.html',
  styleUrls: ['./hero-tracker.component.css'],
})
export class HeroTrackerComponent implements OnInit {
  heroes: Array<Character> = [];
  enemies: Array<Character> = [];
  npcs: Array<Character> = [];

  characterTypes: Array<CharacterType> = [{value:'hero', viewValue:'Hero'}, {value:'enemy', viewValue:'Enemy'}, {value:'npc', viewValue:'NPC'}]

  @Input() public newName: string;
  @Input() public newUrl: string;
  @Input() public newHealth: number;
  @Input() public newInitiative: number;
  @Input() public newType: CharacterType;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  drop(event: CdkDragDrop<Character[]>) {
    moveItemInArray(this.heroes, event.previousIndex, event.currentIndex);
  }
  addHero() {
    this.heroes.push({
      name: this.newName,
      link: this.newUrl,
      maxHealth: this.newHealth,
      currHealth: this.newHealth,
      type: this.newType,
      initiative: this.newInitiative
    });
  }
  removeHero(index) {
    this.heroes.splice(index, 1);
  }
  openInitiativeDialog(){
    this.dialog.open(HeroTrackerInitiativeDialogComponent);
  }
}

@Component({
  selector: 'hero-tracker-initiative-dialog',
  templateUrl: './hero-tracker-initiative-dialog.html',
})
export class HeroTrackerInitiativeDialogComponent {}