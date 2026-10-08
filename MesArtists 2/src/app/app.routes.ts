import { Routes } from '@angular/router';
import { Artists } from './artists/artists';
import { AddArtist } from './add-artist/add-artist';

export const routes: Routes = [
    {path: "artists", component : Artists} ,
    {path: "add-artist", component : AddArtist} ,
    {path: "", redirectTo: "artists", pathMatch: "full"} 

];
