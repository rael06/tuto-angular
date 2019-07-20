import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { PageNotOundComponent } from "./page-not-ound.component";
import { PokemonsModule } from "./pokemons/pokemon.module";

@NgModule({
    imports:      [ BrowserModule, PokemonsModule, AppRoutingModule],
    declarations: [ AppComponent, PageNotOundComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
