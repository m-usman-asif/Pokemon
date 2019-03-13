import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { Favourite } from '../favourite.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [Favourite]
})
export class Tab3Page implements OnInit {

  store: any[];



  constructor(private pokemonService: PokemonService,
              private favour: Favourite) {}

  ngOnInit() {
    this.store = this.favour.favouriteList;
    console.log(this.store);
  }
}
