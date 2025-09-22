import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewReleasesRoutingModule } from './new-releases-routing.module';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { NewReleasesComponent } from './new-releases.component';
import { AuthService } from '../../services/auth.service';
import { SpotifyService } from '../../services/spotify.service';
import { PagesPresenter } from '../pages.presenter';



@NgModule({
  declarations: [
    NewReleasesComponent
  ],
  imports: [
    CommonModule,
    NewReleasesRoutingModule,
    FormsModule,
    CardComponent,    
    ButtonComponent, 
    SpinnerComponent 
  ],
    providers:[
    SpotifyService,
    PagesPresenter,
    AuthService
  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NewReleasesModule { }
