import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  pokemonId: string;
  profile: any;

  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('pokemonId');
      this.isLoading = true;
      this.getProfile();
      this.loadingCtrl.create({message: 'loading Profile'}).then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
        }, 1000);
      });
  }

  getProfile() {
    this.pokemonService.getPokemon(this.pokemonId).subscribe(result => {
      this.profile = result;
      //console.log(this.profile);
    });
  }
}
