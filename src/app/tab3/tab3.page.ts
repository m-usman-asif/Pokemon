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
  // declare the list
  list: Array<{ id: number; name: string }> = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {}

  // this will run before entering the page, read this https://medium.com/@paulstelzer/ionic-4-and-the-lifecycle-hooks-4fe9eabb2864
  ionViewWillEnter() {
    this.list = this.pokemonService.favouriteList;
    console.log(this.list);
  }
}
