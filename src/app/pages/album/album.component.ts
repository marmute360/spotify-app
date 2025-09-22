import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { SubSink } from 'subsink';
import { PagesPresenter } from '../pages.presenter';
import { IAlbum } from '../../interfaces/album.interface';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  standalone:false,
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, OnDestroy{
  albumId!: string | null;
  album!: IAlbum ;
  isLoading: boolean = true;
  public subSink = new SubSink();

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService,
    public presenter: PagesPresenter,
  ) {}

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id');
    if (this.albumId) {
      this.loadAlbum(this.albumId);
    }
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }


  loadAlbum(albumId: string) {
     this.presenter.setLoadingValue(true)
    this.subSink.add(
      this.spotifyService.getAlbumDetails(albumId).subscribe({
        next: (data: any) => {
          this.album = data;
           this.presenter.setLoadingValue(false)
        },
        error: (e: any) => {
          console.error('Error fetching album details:', e);
           this.presenter.setLoadingValue(false)
        }
      }
      )
    )
  }
}
