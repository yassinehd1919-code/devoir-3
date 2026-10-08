import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { artists } from '../model/artist.model';
import { ArtistService } from '../services/artist.spec';

@Component({
  imports: [CommonModule],
  selector: 'app-artists',
  styleUrl: './artists.css',
  templateUrl: './artists.html',
})
export class Artists {

  artists : artists[] | undefined ; //tableau d'artistes

  constructor(private artistService: ArtistService) { 
    
    ; 
   }

}
