import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import {POKEMONS} from "../mock-pokemon-list";
import {Pokemon} from "../pokemon";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {PokemonService} from "../pokemon.service";
import {createInjectableType} from "@angular/compiler";

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

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pokemonService: PokemonService) {
    }

    ngOnInit(){
      const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
      if(pokemonId){
        this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

}
