import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  pokeList: any = { };

  detailsPoke = null;

  constructor(private data: DataService,
              private http: HttpClient,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.data.getPokemons().subscribe(result => {
      this.pokeList = result;
      console.log(this.pokeList);
    });
  }

  newUrl(url) {
    // console.log(this.http.get(url.url));
    this.data.getAbilities(url.url).subscribe(result => {
      this.pokeList = result;
      console.log(this.pokeList);
    });
  }
  

}
