import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  characterId: string | null = null;
  character: any = null;
  locationId: string | null = null;

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtiene el id del personaje desde la URL
    this.route.paramMap.subscribe(params => {
      this.characterId = params.get('id');
      if (this.characterId) {
        this.http.get('https://rickandmortyapi.com/api/character/' + this.characterId)
          .subscribe((data: any) => {
            this.character = data;
            // Agarra el id de la location del personaje
            if (data.location && data.location.url) {
              const parts = data.location.url.split('/');
              this.locationId = parts[parts.length - 1] || null;
            }
          });
      }
    });
  }
}
