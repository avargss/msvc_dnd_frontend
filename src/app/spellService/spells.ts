import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpellService {
private apiURL ='https://www.dnd5eapi.co/api/spells';

  constructor(private http : HttpClient) { }
  
  getSpells(): Observable<any>{
    return this.http.get<any>(this.apiURL);
  }
}
