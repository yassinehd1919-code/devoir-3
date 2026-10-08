import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-artists',
  styleUrl: './artists.css',
  templateUrl: './artists.html',
})
export class Artists {

  artists : string[] ;

  constructor() { 
    this.artists = ["drake", "eminem", "snoop"]; 
   }

}
