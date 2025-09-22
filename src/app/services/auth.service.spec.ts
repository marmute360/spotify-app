import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { first } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);

    // Limpar sessionStorage antes de cada teste
    sessionStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null token if sessionStorage is empty', () => {
    expect(service.getTokenValue()).toBeNull();
  });

  it('should store and return token after fetchToken', () => {
    const fakeToken = 'fake-access-token';

    service.fetchToken().subscribe(token => {
      expect(token).toBe(fakeToken);
      expect(sessionStorage.getItem('spotify_token')).toBe(fakeToken);
      expect(service.getTokenValue()).toBe(fakeToken);
    });

    const req = httpMock.expectOne('https://accounts.spotify.com/api/token');
    expect(req.request.method).toBe('POST');
    req.flush({ access_token: fakeToken });
  });

  it('should set token expiration correctly', () => {
    const fakeToken = 'fake-token-expiration';
    const before = Date.now();

    service.fetchToken().subscribe();

    const req = httpMock.expectOne('https://accounts.spotify.com/api/token');
    req.flush({ access_token: fakeToken });

    const expiration = Number(sessionStorage.getItem('spotify_token_expiration'));
    const after = Date.now();

    expect(expiration).toBeGreaterThanOrEqual(before);
    expect(expiration).toBeLessThanOrEqual(after + 3600 * 1000 + 100);
  });

  it('should clear token when clearToken is called', () => {
    sessionStorage.setItem('spotify_token', 'to-be-cleared');
    sessionStorage.setItem('spotify_token_expiration', (Date.now() + 1000).toString());

    service['clearToken'](); // chama metodo privado
    expect(sessionStorage.getItem('spotify_token')).toBeNull();
    expect(sessionStorage.getItem('spotify_token_expiration')).toBeNull();
  });

  it('should return null if token is expired', () => {
    const expiredTime = Date.now() - 1000;
    sessionStorage.setItem('spotify_token', 'expired-token');
    sessionStorage.setItem('spotify_token_expiration', expiredTime.toString());

    expect(service.getTokenValue()).toBeNull();
  });

});
