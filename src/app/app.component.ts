import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

export class AppComponent{}
