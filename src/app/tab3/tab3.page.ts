import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { Favourite } from '../favourite.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [Favourite]
})
export class Tab3Page implements OnInit {
  // declare the list
  list: Array<{ id: number; name: string }> = [];

  constructor(
    private pokemonService: PokemonService,
    private favour: Favourite,
    private storage: Storage
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.storage.get('pokemonList').then(list => {
      this.list = list;
    });
  }
}
