import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  standalone: false,
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  DataSourceCharacters: any;
  LocationSeleccionado: any;
  locationId: string | null = null;
  locationName: string | null = null;

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private service: CharactersService){}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.locationId = params.get('id');
    if (this.locationId) {
      // 1. Pide la location para obtener los residents
      this.http.get('https://rickandmortyapi.com/api/location/' + this.locationId)
        .subscribe((location: any) => {
          this.locationName = location.name;
          // 2. Extrae los IDs de los residents
          const ids = location.residents.map((url: string) => url.split('/').pop()).join(',');
          if (ids) {
            // 3. Pide los personajes por sus IDs
            this.http.get('https://rickandmortyapi.com/api/character/' + ids)
              .subscribe((characters: any) => {
                this.DataSourceCharacters = Array.isArray(characters) ? characters : [characters];
              });
          } else {
            // Si no hay residentes, inicializa el array vacío
            this.DataSourceCharacters = [];
          }
        });
    }
  });
}

  scrollTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /*CargarCharacters() {
    this.service.CargarCharacters().subscribe(x => {
      this.DataSourceCharacters = (x as any).results;
      console.log(this.DataSourceCharacters);
    });
  }*/
}
