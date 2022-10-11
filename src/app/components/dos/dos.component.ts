import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {
  public pokemon$!: Observable<any>
  public pokemonName = "pikachu"

  constructor(private apiService: ApiService) { 
    // this.apiService.searchPokemon('ditto').subscribe(
    //   {
    //     next: value =>{
    //       console.log(value);
    //     }
    //   }
    // )
    this.pokemon$ = apiService.searchPokemon(this.pokemonName).pipe(
      tap(console.log)
    )
  }


  ngOnInit(): void {
  }
  
  onChange(){
    // this.pokemon$ = this.apiService.searchPokemon(this.pokemonName)
    this.pokemon$ = this.apiService.searchPokemon(this.pokemonName).pipe(
      tap(console.log)
    )
  }

}
