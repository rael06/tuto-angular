import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, of} from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonsService {

    constructor(private http: HttpClient) { }

    private pokemonsUrl = 'api/pokemons';

    searchPokemons(term: string): Observable<Pokemon[]> {
        if (!term.trim()) {
            return of([]);
        }

        // @ts-ignore
        return this.http.get<Pokemon>(`${this.pokemonsUrl}/?name=${term}`).pipe(
            tap(() => this.log(`found pokemons matching "${term}"`)),
            catchError(this.handleError<Pokemon[]>('searchPokemons', []))
        );
    }

    private log(log: string): void {
        console.info(log);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any) : Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({'content-type': 'application/json'})
        };
        return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('updatedPokemon'))
        );
    }

    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${pokemon.id}`;
        const httpOptions = {
            headers: new HttpHeaders({'content-type': 'application/json'})
        };
        return this.http.delete<Pokemon>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('deletePokemon'))
        );
    }

    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
            tap(_=> this.log(`fetched pokemons`)),
            catchError(this.handleError(`getPokemons`, []))
        );
    }

    getPokemon(id: number): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${id}`;

        // @ts-ignore
        return this.http.get<Pokemon>(url).pipe(
            tap(_=> this.log(`fetched pokemon id = ${id}`)),
            catchError(this.handleError(`getPokemon id = ${id}`))
        );
    }

    getPokemonTypes(): string[] {
        return ['Plante', 'Feu', 'Eau', 'Fée', 'Vol', 'Insecte', 'Normal', 'Electrik', 'Poison'];
    }


}
