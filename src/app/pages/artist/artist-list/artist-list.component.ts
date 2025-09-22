import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAlbum } from '../../../interfaces/album.interface';
import { SubSink } from 'subsink';
import { PagesPresenter } from '../../pages.presenter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist-list',
  standalone:false,
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.scss'
})
export class ArtistListComponent{
  @Input()albums: IAlbum[] = [];
  public subSink = new SubSink();

  constructor(
    public router: Router,
    public presenter: PagesPresenter
  ){}


  goToAlbumDetail(albumId: string) {
    this.router.navigate(['/album', albumId]);
  }
}
