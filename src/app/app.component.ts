import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {POKEMONS} from "./mock-pokemon-list";
import {Pokemon} from "./pokemon";
import {CommonModule } from "@angular/common";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: 'app.component.html',
  styles: [],
})

export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;
  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: Pokemon) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);

    if(pokemon){
      console.log(`Vous aves demandé le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
     console.log(`Vous avez demande un pokemon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }

}
