import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SpotifyService } from '../../services/spotify.service';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { PagesPresenter } from '../pages.presenter';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
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
export class HomeModule { }
