import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  constructor(
    private http: HttpClient
  ) { }

  private get dndOpenApi(): string {
    return environment.dndOpenApi;
  }

  fetchMonsterList(page: number = 1, searchTerm: string = ""){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept':'application/json'
      })
    }

    return this.http.get(this.dndOpenApi + `/monsters?page=${page}&search=${searchTerm}`, httpOptions)
  }
}
