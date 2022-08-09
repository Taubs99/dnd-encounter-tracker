import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Character, CharacterType } from '../../character';

@Component({
  selector: 'app-hero-tracker-initiative-dialog',
  templateUrl: './hero-tracker-initiative-dialog.component.html',
  styleUrls: ['./hero-tracker-initiative-dialog.component.css']
})
export class HeroTrackerInitiativeDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HeroTrackerInitiativeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}

    ngOnInit() {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}