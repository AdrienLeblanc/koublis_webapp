import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Wine } from '../model/wine';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WineService {

  private editWineButton: string;
  private deletetWineButton: string;
  private winesUrl: string;
  private saveWineUrl: string;

  constructor(private http: HttpClient) {
    this.editWineButton = "Modifier";
    this.deletetWineButton = "Supprimer";
    this.winesUrl = 'http://localhost:8080/wines';
    this.saveWineUrl = 'http://localhost:8080/saveWine';
  }

  public findAll(): Observable<Wine[]> {
    return this.http.get<Wine[]>("http://localhost:8080/wines");
  }

  public save(wine: Wine) {
    return this.http.post<Wine>("http://localhost:8080/saveWine", wine);
  }
}
