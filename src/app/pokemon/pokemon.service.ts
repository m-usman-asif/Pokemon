import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  favouriteList: Array<{ id: number; name: string }> = [];

  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=150');
  }

  getPokemon(pokemonId: string): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId);
  }

  getFavourite() {
    return ['this.favouriteList'];
  }

  addToFav(pokemonname: string, id: number) {
    this.favouriteList.push({ id: id, name: pokemonname });
    console.log(this.favouriteList);
    id = 0;
    pokemonname = '';
  }
}
