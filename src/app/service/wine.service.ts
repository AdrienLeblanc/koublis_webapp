import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Wine } from '../model/wine';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WineService {

  private wines: string;
  private addWine: string;

  constructor(private http: HttpClient) {
    this.wines = 'http://localhost:8080/wines';
    this.addWine = 'http://localhost:8080/addWine';
  }

  public findAll(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.wines);
  }

  public save(wine: Wine) {
    return this.http.post<Wine>(this.addWine, wine);
  }
}
