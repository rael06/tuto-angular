import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import {isPlatformServer} from "@angular/common";

@Component({
    selector: 'pokemon-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {

    private pokemons: Pokemon[];
    private title: string = 'Pokémons';

    ngOnInit(): void {
        this.pokemons = POKEMONS;
    }

    selectPokemon(pokemon: Pokemon) {
        alert('Vous avez cliqué sur : ' + pokemon.name);
    }


}
