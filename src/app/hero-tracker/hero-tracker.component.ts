import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input } from '@angular/core';
import { Character, CharacterType } from '../character';
import {MatDialog} from '@angular/material/dialog';
import { HeroTrackerInitiativeDialogComponent } from './hero-tracker-initiative-dialog/hero-tracker-initiative-dialog.component'
import { HeroTrackerHealthDialogComponent } from './hero-tracker-health-dialog/hero-tracker-health-dialog.component'

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

    this.sortList();
  }
  removeHero(index) {
    this.heroes.splice(index, 1);

    this.sortList();
  }
  openInitiativeDialog(character: Character){
    const dialogRef = this.dialog.open(HeroTrackerInitiativeDialogComponent, {
      data: {initiative: character.initiative},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined){
        character.initiative = result;

        this.sortList();
      }
    });
  }
  openHealthDialog(character: Character){
    const dialogRef = this.dialog.open(HeroTrackerHealthDialogComponent, {
      data: {currHealth: character.currHealth},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined){
        character.currHealth = result;
      }
    });
  }
  sortList(){
    this.heroes.sort((a, b) => a.initiative - b.initiative);
  }
}