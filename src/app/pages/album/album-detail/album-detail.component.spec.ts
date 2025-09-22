import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailComponent } from './album-detail.component';
import { AlbumModule } from '../album.module';

describe('AlbumDetailComponent', () => {
  let component: AlbumDetailComponent;
  let fixture: ComponentFixture<AlbumDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDetailComponent);
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
