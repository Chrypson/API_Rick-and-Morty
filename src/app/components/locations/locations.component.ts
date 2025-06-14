import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-locations',
  standalone: false,
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit {
  DataSourceLocations: any;
  LocationSeleccionado: any;
  DatosSeleccionados: any = [];
  locationId: string | null = null;
  locationName: string | null = null;

  constructor(
    private service: LocationsService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // Este metodo se ejecuta al iniciar el componente y llama al
  // metodo CargarUsuarios para obtener el JSON

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.locationId = params.get('id');
      if (this.locationId) {
        //this.CargarCharacters();
        this.service.CargarDatos(Number(this.locationId)).subscribe((data: any) => {
          this.LocationSeleccionado = data;
        });
      } else {
        this.service.CargarLocations().subscribe((x: any) => {
          this.DataSourceLocations = x.results;
        });
      }
    });
  }

  // Metodo que llama al servicio para obtener el JSON
  // y darselo a la variable DataSourceLocations
  CargarLocations() {
      this.service.CargarLocations().subscribe(x => {
        this.DataSourceLocations = (x as any).results;
        console.log(this.DataSourceLocations);
      });
    }
}