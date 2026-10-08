import { Injectable } from '@angular/core'; 
import { artists } from '../model/artist.model'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class ArtistService { 
  artists : artists[] ; //tableau d'artistes
  constructor() { 
    this.artists = [ 
      { idArtist : 1,  nomArtist : "drake", nbrAlbum : 3000.600, dateDebut : new Date("2006-01-14")}, 
      { idArtist : 2,  nomArtist : "eminem", nbrAlbum : 450, dateDebut : new Date("1988-12-17")}, 
      { idArtist : 3,  nomArtist :"snoop", nbrAlbum : 900.123, dateDebut : new Date("1980-02-20")} 
    ]; 
   } 
 
    listeArtists():artists[] { 
      return this.artists; 
    } 
 
    ajouterArtist( artist: artists){ 
      this.artists.push(artist); 

    supprimerArtist(art: Artist) {
  const index = this.artists.indexOf(art);
  if (index > -1) {
    this.artists.splice(index, 1);
  }
}
    } 
} 