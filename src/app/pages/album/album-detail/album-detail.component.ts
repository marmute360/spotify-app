import { Component, Input, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { IAlbum } from '../../../interfaces/album.interface';

@Component({
  selector: 'app-album-detail',
  standalone:false,
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.scss'
})
export class AlbumDetailComponent {
   @Input() album!: IAlbum;
   public artistNames: string = '';
   public albumTypeFormatted: string = '';

   constructor(public location: Location) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['album'] && this.album) {
      this.artistNames = this.album?.artists.map((a: any) => a.name).join(', ');
      this.albumTypeFormatted = this.album?.album_type
        ? this.album?.album_type?.charAt(0).toUpperCase() + this.album?.album_type.slice(1)
        : '';
    }
  }

  goBack() {
  this.location.back();
}

}
