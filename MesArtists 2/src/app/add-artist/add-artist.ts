import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { artists } from '../model/artist.model';

@Component({
  imports: [FormsModule],
  selector: 'app-add-artist',
  styleUrl: './add-artist.css',
  templateUrl: './add-artist.html',
})
export class AddArtist implements OnInit {

  newArtist = new artists();
  msg : string = "";
  artistService: any;
  constructor(){}
  ngOnInit(): void {}
  addArtist(){
    //console.log(this.newArtist)
    this.artistService.ajouterArtist(this.newArtist);
    this.msg = "Artiste " + this.newArtist.nomArtist + " ajouté avec succès !";
  }

}
