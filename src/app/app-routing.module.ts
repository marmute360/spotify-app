import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
  }, 
  {
    path: 'home',
    redirectTo: '', 
    pathMatch: 'full'
  },
  {
    path: 'lancamentos',
    loadChildren: () => import('./pages/new-releases/new-releases.module').then(m => m.NewReleasesModule) 
  },
  {
    path: 'artist/:id',
    loadChildren: () => import('./pages/artist/artist.module').then(m => m.ArtistModule)
  },
  {
    path: 'album/:id',
    loadChildren: () => import('./pages/album/album.module').then(m => m.AlbumModule) 
  },
  { path: '**', redirectTo: '' }  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }