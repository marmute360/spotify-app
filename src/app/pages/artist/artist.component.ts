import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { SubSink } from 'subsink';
import { PagesPresenter } from '../pages.presenter';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IArtist } from '../../interfaces/artist.interface';
import { IAlbum } from '../../interfaces/album.interface';

@Component({
  selector: 'app-artist',
  standalone:false,
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent implements OnInit, OnDestroy{

  public subSink = new SubSink()
  public artistData!: IArtist;
  public artistId!: string | null;
  public artistAlbumsData: IAlbum[] = [];
  public isLoading: boolean = true;
  public isLoadingButton: boolean = false;
  public limitLoadMore: boolean = false;
  public offset: number = 0; 
  public limit: number = 10; 

  constructor(
    public spotifyService: SpotifyService,
    public presenter: PagesPresenter,
    public route: ActivatedRoute,
    public location: Location
  ){}

  ngOnInit(): void {
    this.artistId = this.route.snapshot.paramMap.get('id');
    if (this.artistId) {
      this.loadArtistDetails();
    }
    this.presenterSubscriptions();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  presenterSubscriptions() {
    this.subSink.add(

    )
  }

  loadArtistDetails() {
     this.presenter.setLoadingValue(true)
    this.subSink.add(
      this.spotifyService.getArtistDetails(this.artistId).subscribe({
        next: (data) => {
           this.presenter.setLoadingValue(false)
          this.artistData = data;
          this.loadAlbums();
        },
        error: (e) => {
          console.error('Error fetching artist details:', e);
           this.presenter.setLoadingValue(false)
        }
      }
      )
    );
  }

loadAlbums() {
  this.isLoadingButton = true; 
  this.subSink.add(
    this.spotifyService.getAlbumsByArtist(this.artistId, this.offset, this.limit).subscribe({
      next: (data) => {
        if (this.offset === 0) {
          this.artistAlbumsData = data.items;
          this.limitLoadMore = data.next === null ? true : false
        } else {
          this.artistAlbumsData = [...this.artistAlbumsData, ...data.items]; 
          this.limitLoadMore = data.next === null ? true : false
        }
        this.isLoadingButton = false;
        this.isLoading = false;
      },
      error: (e) => {
        console.error('Error fetching albums:', e);
        this.isLoadingButton = false;
        this.isLoading = false;
      }
    })
  );
}

loadMoreAlbums() {
  this.offset += this.limit;
  this.loadAlbums();
}


  goBack() {
    this.location.back();
  }

}
