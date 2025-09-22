import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponent } from './album.component';
import { AlbumModule } from './album.module';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumModule, HttpClientTestingModule],
      providers: [
        SpotifyService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'fake-artist-id' 
              }
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    component.album = {
      name: 'Ozzy',
      id:'xyz',
      release_date:'', 
      album_type: 'artist', 
      external_urls: {spotify: 'url'}, 
      artists: [{
        name: 'Ozzy',
      id:'xyz',
      followers: { total: 1234, href: null },
      genres: ['pop', 'rock'],
      images: [{
        url: 'https://xpto.com/001',
        height: 0,
        width: 0
      }]
     }],
      tracks: '',
      total_tracks: 20,
      images: [{
        url: 'https://xpto.com/001',
        height: 0,
        width: 0
      }]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
