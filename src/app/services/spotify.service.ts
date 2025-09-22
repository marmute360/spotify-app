import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArtist } from '../interfaces/artist.interface';
import { IAlbum } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = 'https://api.spotify.com/v1'; 

  constructor(private http: HttpClient) {}

searchArtist(query: string, offset: number, limit: number): Observable<any> {

  query = query && query.trim() !== '' ? query : 'a'; 

  const params = new URLSearchParams({
    q: query,
    type: 'artist',
    offset: offset.toString(),
    limit: limit.toString()
  });

  return this.http.get<any>(`${this.apiUrl}/search?${params.toString()}`);
}

  getArtistDetails(id: string | null): Observable<IArtist> {
    return this.http.get<any>(`${this.apiUrl}/artists/${id}`);
  }

  getAlbumsByArtist(id: string | null, offset: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/artists/${id}/albums?offset=${offset}&limit=${limit}`); 
  }

  getAlbumDetails(id: string): Observable<IAlbum> {
    return this.http.get<any>(`${this.apiUrl}/albums/${id}`); 
  }

  getNewReleases(offset: number = 0, limit: number = 20, country: string = 'US'): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/browse/new-releases?limit=${limit}&offset=${offset}&country=${country}`);
}
}
