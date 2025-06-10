import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private apiUrl =`https://www.dnd5eapi.co/api/monsters`
  constructor(private http: HttpClient) {}

    getMonster():Observable<any>{
      return this.http.get<any>(this.apiUrl);
    }

    getMonsterDetails(index: string): Observable<any> {
  return this.http.get<any>(`https://www.dnd5eapi.co/api/monsters/${index}`);
}

   
}
