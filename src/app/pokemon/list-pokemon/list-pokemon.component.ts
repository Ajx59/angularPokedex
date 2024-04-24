import { Component } from '@angular/core';
import {POKEMONS} from "../mock-pokemon-list";
import {BorderCardDirective} from "../border-card.directive";
import {DatePipe, NgForOf} from "@angular/common";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    BorderCardDirective,
    DatePipe,
    NgForOf,
    PokemonTypeColorPipe
  ],
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent {
  pokemonList = POKEMONS;
  constructor(private router: Router) {
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
