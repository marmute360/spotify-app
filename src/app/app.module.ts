
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpotifyInterceptor } from './utils/token.interceptor';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { SpotifyService } from './services/spotify.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthService,
    SpotifyService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyInterceptor,
      multi: true  
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
