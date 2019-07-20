import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { ListPokemonComponent } from "./list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { PageNotOundComponent } from "./page-not-ound.component";

@NgModule({
    imports:      [ BrowserModule, AppRoutingModule ],
    declarations: [ AppComponent, BorderCardDirective, PokemonTypeColorPipe, ListPokemonComponent, DetailPokemonComponent, PageNotOundComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
