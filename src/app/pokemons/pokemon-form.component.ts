import { Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {PokemonsService} from "./pokemons.service";
import {Pokemon} from "./pokemon";

@Component({
    templateUrl: "app/pokemons/pokemon-form.component.html",
    selector: 'pokemon-form'
})
export class PokemonFormComponent implements OnInit {
    @Input() pokemon: Pokemon;
    types: Array<string>;

    constructor (private router: Router, private pokemonsService: PokemonsService) {

    }
    ngOnInit(): void {
    }
}

