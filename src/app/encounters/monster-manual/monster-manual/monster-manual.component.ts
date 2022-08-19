import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from 'src/app/services/api-gateway.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


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

  

  ngOnInit(): void {
    this.getPageOfMonsters();
  }

  getPageOfMonsters(){
    if (this.currPage > 0) {
      this.api.fetchMonsterList(this.currPage + 1, this.searchTerm).subscribe( (response: any ) => {
        console.log(response)
        this.monsterData = this.monsterData.concat(response.results);

        if (response.next != null){
          this.currPage++;
        }
        else {
          this.currPage=-1;
        }
      });
    }
  }

  onScroll(){
    this.getPageOfMonsters();
  }
}
