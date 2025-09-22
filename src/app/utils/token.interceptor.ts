import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, take, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class SpotifyInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('https://accounts.spotify.com/api/token')) {
      return next.handle(req);
    }

    const token = this.authService.getTokenValue();

    if (token) {
      const cloned = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
      return next.handle(cloned);
    } else {
      return this.authService.fetchToken().pipe(
        take(1),
        switchMap(newToken => {
          const cloned = req.clone({
            setHeaders: { Authorization: `Bearer ${newToken}` }
          });
          return next.handle(cloned);
        }),
        catchError(err => {
          console.warn('Não foi possível obter token, enviando requisição sem token', err);
          return next.handle(req);
        })
      );
    }
  }
}
