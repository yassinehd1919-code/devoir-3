import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { artist } from '../artist';
import { artistService } from '../artists';
import { Artist } from '../services/artist';

@Component({
  selector: 'app-modifier-artist',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './modifier-artist.html',
  styleUrl: './modifier-artist.css'
})
export class ModifierArtist implements OnInit {

  id = 0;
  nom = '';
  prix = 0;
  dateCreation = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artistService: ArtistService
  ) {}

  ngOnInit() {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    const artist = this.artistService.getArtist(this.id);

    if (artist) {
      this.nom = artist.nom;
      this.prix = artist.prix;
      this.dateCreation = artist.dateCreation;
    }
  }

  modifierArtist() {

    const artist: Artist = {
      id: this.id,
      nom: this.nom,
      prix: this.prix,
      dateCreation: this.dateCreation
    };

    this.artistService.modifierArtist(artist);

    this.router.navigate(['/artist']);
  }

}