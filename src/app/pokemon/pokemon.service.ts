import { Injectable } from '@angular/core';
import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemon-list";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  getPokemonList() : Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId:number):Pokemon|undefined{

  }

  getPokemonTypeList(): string[]{
    return [
        'Plante',
        'Feu',
        'Eau',
        'Insect',
        'Normal',
        'Electik',
        'Poison',
        'Fée',
        'Vol',
        'Combat',
        'Psy'
    ];
  }
}
