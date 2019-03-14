import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface FavPokemon {
  id: number,
  name: string
}

const pokemonsKey = 'my-key';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  addPokemon(item: FavPokemon): Promise<any> {
    return this.storage.get(pokemonsKey).then((items: FavPokemon[]) => {
      if (item) {
        items.push(item);
        return this.storage.set(pokemonsKey, items);

      } else {
        return this.storage.set(pokemonsKey, [item]);
      }

    });
  }

  getFavPokemons(): Promise<FavPokemon[]> {
    return this.storage.get(pokemonsKey);
  }
}
