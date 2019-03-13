import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: any = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(this.url);
  }

  getAbilities(url): Observable<any> {
    return this.http.get(url);
  }

}




