import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album.component'; 
import { AlbumDetailComponent } from './album-detail/album-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumComponent,
    children: [
      {
        path: '',
        component: AlbumDetailComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
