import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ApiGatewayService } from 'src/app/services/api-gateway.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-monster-manual',
  templateUrl: './monster-manual.component.html',
  styleUrls: ['./monster-manual.component.scss']
})
export class MonsterManualComponent implements OnInit {

  constructor(
    private api: ApiGatewayService
  ) { }

  faPlusCircle = faPlusCircle;

  currPage: number = 1;
  monsterData: Array<any> = [];

  searchTerm: string = "";
  currentSearch?: Subscription;

  ngOnInit(): void {
    this.getPageOfMonsters();
  }

  getPageOfMonsters(){
    if (this.currPage > 0) {
      this.currentSearch = this.api.fetchMonsterList(this.currPage, this.searchTerm).subscribe( (response: any ) => {
        this.monsterData = this.monsterData.concat(response.results);

        if (response.next == null){
          this.currPage= -1;
        }
      });
    }
  }

  onScroll(){
    this.currPage++;
    this.getPageOfMonsters();
  }

  searchTermChanged(event: any){
    console.log("reset")
    // Clear our search results
    this.monsterData = [];
    this.currPage = 1;

    // If we're already doing a search, unsubscribe from it
    if (!this.currentSearch?.closed){
      this.currentSearch?.unsubscribe();
    }

    this.getPageOfMonsters();
  }
}
