import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllitems(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/item/?limit=150');
  }

  getItemDetails(itemId: string): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/item/' + itemId);
  }

}
