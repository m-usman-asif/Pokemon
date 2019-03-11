import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  pokemonId: string;
  profile: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('pokemonId');
    this.getProfile();
  }

  getProfile() {
    this.pokemonService.getPokemon(this.pokemonId).subscribe(result => {
      this.profile = result;
      console.log(this.profile);
    });
  }
}
