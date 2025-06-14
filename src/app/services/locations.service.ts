import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  url = "https://rickandmortyapi.com/api/location/";
  urlchar = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) { }

  // Metodo para pedirle a la API /location/
  CargarLocations() {
    return this.http.get(this.url);
  }
  
    // Metodo para pedirle a la API /location/id
  CargarDatos(id: number) {
    return this.http.get(this.url + id);
  }

  /*CargarCharacters() {
    return this.http.get(this.urlchar);
  }*/

}
