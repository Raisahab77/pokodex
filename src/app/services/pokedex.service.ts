import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  apiUrl = environment.apiUrl;
  constructor(private _http: HttpClient) { }

  getAllPokemonList(){
    return this._http.get(this.apiUrl+`pokemon`);
  }

  getPokemonByID(id:any){
    return this._http.get(this.apiUrl+`pokemon/${id}`);
  }
}
