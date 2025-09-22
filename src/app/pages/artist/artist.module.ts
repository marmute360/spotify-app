import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesPresenter } from '../pages.presenter';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistComponent } from './artist.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { CardComponent } from '../../components/card/card.component';
import { ArtistRoutingModule } from './artitst-routing.module';
import { ButtonComponent } from '../../components/button/button.component';



@NgModule({
  declarations: [
    ArtistComponent,
    ArtistDetailComponent,
    ArtistListComponent
  ],
  imports: [
    CommonModule,
    CardComponent,    
    ButtonComponent, 
    SpinnerComponent, 
    ArtistRoutingModule
  ],
  providers:[
    PagesPresenter,
    SpotifyService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ArtistModule { }
