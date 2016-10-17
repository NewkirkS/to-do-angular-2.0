import { Component } from "@angular/core";

@Component({
  selector: "albums",
  template: `
  <h3>Here are my favorite albums!</h3>
  <div *ngFor="let currentAlbum of favoriteAlbums">
    <p>{{currentAlbum}}</p>
  </div>
  `
})

export class AlbumsListComponent {
  favoriteAlbums: string[] = ["The White Album", "Poison Cup", "2"];
}
