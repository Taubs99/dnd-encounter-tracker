import { Component, OnInit } from '@angular/core';
import { Party } from '../models/party';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {

  parties: Array<Party> = [];

  pageSize: number = 10;
  page: number = 1;

  activeParty?: Party;

  constructor() { }

  ngOnInit(): void {
    let testParty: Party = new Party("Test Party");
    let testParty2: Party = new Party("Test Party 2", "A description");
    let testParty3: Party = new Party("Test Party 3", "A Much longer description that is no more descriptive");

    testParty.addToParty({
      name: "Sylvia",
      maxHealth: 35,
      armourClass: 18
    })

    this.parties.push(testParty)
    this.parties.push(testParty2)
    this.parties.push(testParty3)
  }

  changeSelected(newSelection: Party){
    this.activeParty = newSelection;
  }
}
