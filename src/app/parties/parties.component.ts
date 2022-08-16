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

  constructor() { }

  ngOnInit(): void {
  }

}
