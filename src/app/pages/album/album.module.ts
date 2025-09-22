import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { CardComponent } from '../../components/card/card.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from './album-routing.module';
import { PagesPresenter } from '../pages.presenter';



@NgModule({
  declarations: [
    AlbumDetailComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    SpinnerComponent,
    CardComponent,
    AlbumRoutingModule
  ],
  providers: [
    PagesPresenter
  ],
  exports: [AlbumComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AlbumModule { }
