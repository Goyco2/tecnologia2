import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegoDataService {
  private jsonUrl = 'assets/lego-sets.json';

  constructor(private http: HttpClient) { }

  getLegoSets(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
