import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Character, CharacterType } from '../../character';

@Component({
  selector: 'app-hero-tracker-health-dialog',
  templateUrl: './hero-tracker-health-dialog.component.html',
  styleUrls: ['./hero-tracker-health-dialog.component.css']
})
export class HeroTrackerHealthDialogComponent implements OnInit {

  healthToAddRemove: number = 0;

  constructor(
    public dialogRef: MatDialogRef<HeroTrackerHealthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}

    ngOnInit() {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addHealth(){
    this.data.currHealth += this.healthToAddRemove;
  }

  removeHealth(){
    this.data.currHealth -= this.healthToAddRemove;
  }

}