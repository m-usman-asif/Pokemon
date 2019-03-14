import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Favourite } from '../favourite.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  favouriteList: Array<{ id: number; name: string }> = [];

  constructor(private http: HttpClient, private favorite: Favourite) {}

  getAllPokemon(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=150');
  }

  getPokemon(pokemonId: string): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId);
  }

  addToFav(pokemonname: string, id: number) {
    this.favorite.favouriteList.push({ id: id, name: pokemonname });
    console.log(this.favorite);
    this.favouriteList.push({ id: id, name: pokemonname });
    console.log(this.favouriteList);
  }
}
