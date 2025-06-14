import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) {}

  CargarCharacters() {
    return this.http.get(this.url);
  }

  CargarDatos(id: number) {
    return this.http.get(this.url + id);
  }

}
