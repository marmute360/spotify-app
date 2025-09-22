import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArtist } from '../../../interfaces/artist.interface';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  standalone:false,
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
 @Input() artist!: IArtist;

  constructor() {}

  ngOnInit() {

  }

}
