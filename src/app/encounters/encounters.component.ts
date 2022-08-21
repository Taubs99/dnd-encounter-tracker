import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models/encounter';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {

  constructor() { }

  encounters: Array<Encounter> = [];
  activeEncounter?: Encounter;

  creatingNewEncounter: boolean = false;

  pageSize: number = 10;
  page: number = 1;

  ngOnInit(): void {
    this.encounters.push(new Encounter("test"))
  }

  changeSelected(encounter: Encounter){
    this.activeEncounter = encounter;
  }
}
