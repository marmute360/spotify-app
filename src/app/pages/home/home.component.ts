import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { SubSink } from 'subsink';
import { Router } from '@angular/router';
import { PagesPresenter } from '../pages.presenter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:false,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public subSink = new SubSink();
  public searchQuery: string = '';
  public artists: any[] = [];
  public isLoading: boolean = false;
  public isLoadingButton: boolean = false;
  public offset: number = 0;
  public limit: number = 50; 

  constructor(
    private spotifyService: SpotifyService,
    public router: Router,
    public presenter: PagesPresenter
  ) {}


  ngOnInit(): void {
    this.presenter.setLoadingValue(true)
    this.serviceSubscriptions();
    
  }
  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  serviceSubscriptions() {
    this.subSink.add(
      this.spotifyService.searchArtist('a', this.offset, this.limit).subscribe({
        next: (data) => {
          const sortedArtists = this.sortArtists( data.artists.items);
          this.artists = sortedArtists;  
           this.presenter.setLoadingValue(false)

        },
        error: (error) => {
          console.error('Error loading default artists:', error);
           this.presenter.setLoadingValue(false)

        },
      }
      )
    )
  }


loadArtists() {
  this.isLoadingButton = true
  this.spotifyService.searchArtist(this.searchQuery, this.offset, this.limit)
    .subscribe({
      next: data => {

         const sortedArtists = this.sortArtists( data.artists.items);

        if (this.offset === 0) {
          this.artists = sortedArtists;
        } else {
          this.artists = [...this.artists, ...sortedArtists];
        }

        this.isLoadingButton = false;
         this.presenter.setLoadingValue(false)

      },
      error: err => {
        console.error('Erro ao buscar artistas:', err);
        this.isLoadingButton = false;
         this.presenter.setLoadingValue(false)

      }
    });
}





 sortArtists(artists: any[]): any[] {
  return artists.sort((a, b) => {

    const popDiff = (b.popularity || 0) - (a.popularity || 0);
    if (popDiff !== 0) {
      return popDiff;
    }

    const aHasImage = a.images && a.images.length > 0 ? 1 : 0;
    const bHasImage = b.images && b.images.length > 0 ? 1 : 0;
    return bHasImage - aHasImage;
  });
}



  goToArtistDetail(artistId: string) {
    this.router.navigate(['/artist', artistId]);
  }

  searchArtist() {
    this.offset = 0;
    this.presenter.setLoadingValue(true)
    this.loadArtists(); 
  }

  
  loadMoreArtists() {
    this.offset += this.limit;
    this.loadArtists();
  }

}
