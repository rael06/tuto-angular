import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { PokemonsModule } from "./pokemons/pokemon.module";
import { InMemoryDataService } from "./in-memory-data.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppComponent }  from './app.component';
import { PageNotOundComponent } from "./page-not-ound.component";

@NgModule({
    imports: [
        BrowserModule,
        PokemonsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
    ],
    declarations: [ AppComponent, PageNotOundComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
