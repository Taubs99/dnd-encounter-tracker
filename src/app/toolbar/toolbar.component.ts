import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHouseChimney, faDiceD20, faUsersBetweenLines, faBookSkull } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() currentTab!: string;
  @Output() currentTabChange = new EventEmitter<string>();

  faHouseChimney = faHouseChimney
  faDiceD20 = faDiceD20
  faUsersBetweenLines = faUsersBetweenLines
  faBookSkull = faBookSkull


  constructor() { }

  ngOnInit(): void {
  }

  setTab(tab: string){
    this.currentTabChange.emit(tab)
  }

}
