import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDetailComponent } from './artist-detail.component';
import { ArtistModule } from '../artist.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArtistDetailComponent', () => {
  let component: ArtistDetailComponent;
  let fixture: ComponentFixture<ArtistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistDetailComponent);
    component = fixture.componentInstance;
     component.artist = {
      name: 'Ozzy',
      id:'xyz',
      followers: { total: 1234, href: null },
      genres: ['pop', 'rock'],
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
