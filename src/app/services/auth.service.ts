import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  private tokenExpirationKey = 'spotify_token_expiration';
  private tokenKey = 'spotify_token';

private clientId = environment.spotifyClientId;
private clientSecret = environment.spotifyClientSecret;

  constructor(private http: HttpClient) {
    const token = sessionStorage.getItem(this.tokenKey);
    const expiration = Number(sessionStorage.getItem(this.tokenExpirationKey));

    if (token && expiration && Date.now() < expiration) {
      this.tokenSubject.next(token);
    } else {
      this.clearToken();
    }
  }

  /**
   * Retorna o token atual se válido
   */
  getTokenValue(): string | null {
    const expiration = Number(sessionStorage.getItem(this.tokenExpirationKey));
    const token = sessionStorage.getItem(this.tokenKey);

    if (token && expiration && Date.now() < expiration) {
      return token;
    }
    return null;
  }

  /**
   * Observable do token
   */
  get token$(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  /**
   * Busca um token novo da API 
   */
  fetchToken(): Observable<string> {
    const url = 'https://accounts.spotify.com/api/token';
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`)
    });

    return this.http.post<any>(url, body.toString(), { headers }).pipe(
      map(res => res.access_token),
      tap(token => {
        const expiresIn = 3600 * 1000; // 1h 
        const expiration = Date.now() + expiresIn;
        sessionStorage.setItem(this.tokenKey, token);
        sessionStorage.setItem(this.tokenExpirationKey, expiration.toString());
        this.tokenSubject.next(token);
      })
    );
  }

  /**
   * Limpa token expirado
   */
  private clearToken() {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.tokenExpirationKey);
    this.tokenSubject.next(null);
  }
}
