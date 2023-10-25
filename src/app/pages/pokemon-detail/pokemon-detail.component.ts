import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private _pokedexService:PokedexService,
              private _activatedRoute: ActivatedRoute) { }

  pokemonDtl:any;

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.getPokemonByID(id);
  }

  getPokemonByID(id:any){
    this._pokedexService.getPokemonByID(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.pokemonDtl = response;
      }
    })
  }

  pokemonName(name:string){
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

}
