import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private _pokedexService:PokedexService) { }

  pokemonList:any;

  ngOnInit(): void {

    this.getAllPokemonList();
  }

  getAllPokemonList(){
    this._pokedexService.getAllPokemonList().subscribe({
      next:(response)=>{
        console.log(response);
        this.pokemonList = response;
      }
    })
  }

  pokemonName(name:string){
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

}
