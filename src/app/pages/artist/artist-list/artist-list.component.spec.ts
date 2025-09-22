import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListComponent } from './artist-list.component';
import { ArtistModule } from '../artist.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ArtistModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
