import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import {POKEMONS} from "../mock-pokemon-list";
import {Pokemon} from "../pokemon";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    PokemonTypeColorPipe,
    DatePipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
  export class DetailPokemonComponent {
    pokemonList: Pokemon[];
    pokemon: Pokemon|undefined;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(){
      this.pokemonList = POKEMONS;
      const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
      if(pokemonId){
        this.pokemon = this.pokemonList.find(pokemon => pokemon.id === +pokemonId);
    }
  }
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

}
