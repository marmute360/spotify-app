import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { PagesPresenter } from '../pages.presenter';
import { IAlbum } from '../../interfaces/album.interface';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  standalone: false,
  styleUrls: ['./new-releases.component.scss'],
})
export class NewReleasesComponent implements OnInit, OnDestroy {
  public subSink = new SubSink();

  public albums: IAlbum[] = [];
  public isLoading: boolean = true;
  public isLoadingButton: boolean = false; 
  public offset: number = 0;
  public limit: number = 20;
  public searchQuery: string = ''; 

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
    public presenter: PagesPresenter
  ) {}

  ngOnInit(): void {
    this.presenter.setLoadingValue(true);
    this.loadNewReleases(); 
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  loadNewReleases() {
    this.isLoadingButton = this.offset > 0;
    if (this.offset === 0) this.isLoading = true;

    this.subSink.add(
      this.spotifyService.getNewReleases(this.offset, this.limit).subscribe({
        next: (data) => {

          if (this.offset === 0) {
            this.albums = data.albums.items;
          } else {
            this.albums = [...this.albums, ...data.albums.items];
          }
          this.presenter.setLoadingValue(false);
          this.isLoadingButton = false;
        },
        error: (err) => {
          console.error('Erro ao carregar new releases', err);
          this.presenter.setLoadingValue(false);
          this.isLoadingButton = false;
        },
      })
    );
  }


  getArtistNames(album: any): string {
  return album.artists.map((a:any) => a.name).join(', ');
  }


  loadMore() {
    this.offset += this.limit;
    this.loadNewReleases();
  }

  goToAlbum(albumId: string) {
    this.router.navigate(['/album', albumId]);
  }

  searchAlbums() {
    this.presenter.setLoadingValue(true);
    this.offset = 0;
    this.loadNewReleases();
  }
}
