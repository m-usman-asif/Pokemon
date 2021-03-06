import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: 'pokemon.page.html',
  styleUrls: ['pokemon.page.scss']
})
export class PokemonPage implements OnInit {
  pokeList: any[];
  detailsPoke = null;

  constructor(
    private pokemonService: PokemonService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.pokemonService.getAllPokemon().subscribe(result => {
      this.pokeList = result.results;
      //console.log(this.pokeList);
    });
  }

  onFavPokemon(pokemonName: string, pokemonId: number) {
    this.pokemonService.addToFav(pokemonName, pokemonId);
  }
}
